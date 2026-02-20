import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

// --------------- Types ---------------

export interface Submission {
  id: string;
  createdAt: string;
  projectType: string;
  surface: number;
  timeline: string;
  postalCode: string;
  fullName: string;
  phone: string;
  email: string;
  message?: string;
  read: boolean;
}

export interface AnalyticsEvent {
  id: string;
  createdAt: string;
  type: "page_view" | "cta_click" | "form_start" | "form_submit";
  page: string;
  label?: string;
  referrer?: string;
  ua?: string;
}

// --------------- Paths ---------------

const STORAGE_DIR = process.env.VERCEL
  ? join("/tmp", "storage")
  : join(process.cwd(), "storage");
const SUBMISSIONS_FILE = join(STORAGE_DIR, "submissions.json");
const ANALYTICS_FILE = join(STORAGE_DIR, "analytics.json");

function ensureDir() {
  try {
    if (!existsSync(STORAGE_DIR)) {
      mkdirSync(STORAGE_DIR, { recursive: true });
    }
  } catch {
    // Read-only filesystem (Vercel) — ignore, reads will return []
  }
}

// --------------- Submissions ---------------

export function readSubmissions(): Submission[] {
  ensureDir();
  if (!existsSync(SUBMISSIONS_FILE)) return [];
  try {
    return JSON.parse(readFileSync(SUBMISSIONS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export function saveSubmission(
  data: Omit<Submission, "id" | "createdAt" | "read">
): Submission {
  ensureDir();
  const submissions = readSubmissions();
  const submission: Submission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    read: false,
    ...data,
  };
  submissions.unshift(submission);
  try {
    writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch {
    // Read-only filesystem — data won't persist
  }
  return submission;
}

export function markSubmissionRead(id: string): boolean {
  const submissions = readSubmissions();
  const sub = submissions.find((s) => s.id === id);
  if (!sub) return false;
  sub.read = true;
  try {
    writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch {
    return false;
  }
  return true;
}

export function deleteSubmission(id: string): boolean {
  const submissions = readSubmissions();
  const idx = submissions.findIndex((s) => s.id === id);
  if (idx === -1) return false;
  submissions.splice(idx, 1);
  try {
    writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch {
    return false;
  }
  return true;
}

// --------------- Analytics ---------------

const MAX_EVENTS = 10_000;

export function readAnalytics(): AnalyticsEvent[] {
  ensureDir();
  if (!existsSync(ANALYTICS_FILE)) return [];
  try {
    return JSON.parse(readFileSync(ANALYTICS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export function saveEvent(
  data: Omit<AnalyticsEvent, "id" | "createdAt">
): AnalyticsEvent {
  ensureDir();
  const events = readAnalytics();
  const event: AnalyticsEvent = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...data,
  };
  events.push(event);
  // Keep only last MAX_EVENTS
  if (events.length > MAX_EVENTS) {
    events.splice(0, events.length - MAX_EVENTS);
  }
  try {
    writeFileSync(ANALYTICS_FILE, JSON.stringify(events, null, 2));
  } catch {
    // Read-only filesystem — event won't persist
  }
  return event;
}
