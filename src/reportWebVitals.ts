// The `web-vitals` package changed its API in v3+; it now exports
// `onCLS`, `onFCP`, etc. instead of `getCLS`, and there isn't a
// `ReportHandler` type. FID has been replaced with INP in newer versions.
// We accept a generic callback that receives any `Metric`.
import { onCLS, onFCP, onINP, onLCP, onTTFB, Metric } from "web-vitals";

// use a more permissive callback type (the library exports `Metric`,
// but clients can always widen it further).
export type WebVitalsCallback = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: WebVitalsCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // calling the new APIs directly is simpler than dynamic import
    onCLS(onPerfEntry);
    onINP(onPerfEntry); // use INP instead of FID
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
