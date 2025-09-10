/** @module services/records */
import { WindRadii } from "./WindRadii";

/**
 * Represents a single data entry of a Cyclone in the HURDAT2 file
 */
export interface Data {
  date: string;
  time: string;
  recordIdentifier: string;
  status: string;
  latitude: number;
  longitude: number;
  maxSustainedWinds: number;
  minPressure: number;
  max34kt: WindRadii;
  max50kt: WindRadii;
  max64kt: WindRadii;
  maxWindRadius: number;
}
