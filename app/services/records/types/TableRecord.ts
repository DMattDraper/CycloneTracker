/** @module services/records */

/**
 * Represents the fully processed data meant to display on the final table
 */
export interface TableRecord {
  name: string;
  landfallDate: string;
  maximumWindSpeed: number;
}