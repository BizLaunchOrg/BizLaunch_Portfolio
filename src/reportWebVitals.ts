// web-vitals v5 exports: onCLS, onFCP, onINP, onLCP, onTTFB (Metric type)
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

export type WebVitalsCallback = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: WebVitalsCallback) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
