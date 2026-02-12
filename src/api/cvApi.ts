import axios from "axios";
import type { CVAnalysis, ATSScore, JobMatch, RewriteResult } from "../types/cv";

const API = "http://localhost:8082";

const multipartConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};

export const analyzeCV = async (file: File): Promise<CVAnalysis> => {
  const fd = new FormData();
  fd.append("file", file);
  const res = await axios.post(`${API}/cv/analyze`, fd, multipartConfig);
  return res.data;
};

export const atsScore = async (file: File): Promise<ATSScore> => {
  const fd = new FormData();
  fd.append("file", file);
  const res = await axios.post(`${API}/cv/ats-score`, fd, multipartConfig);
  return res.data;
};

export const jobMatch = async (
  file: File,
  jobDescription: string
): Promise<JobMatch> => {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("jobDescription", jobDescription);
  const res = await axios.post(`${API}/cv/job-match`, fd, multipartConfig);
  return res.data;
};

export const rewriteCV = async (file: File): Promise<RewriteResult> => {
  const fd = new FormData();
  fd.append("file", file);
  const res = await axios.post(`${API}/cv/rewrite`, fd, multipartConfig);
  return res.data;
};
