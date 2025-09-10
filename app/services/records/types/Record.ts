/** @module services/records */
import { Data } from "./Data";
import { Header } from "./Header";

/**
 * Represents the congregate record for a single Cyclone in the HURDAT2 file
 */
export interface Record {
  header: Header;
  data: Data[];
}
