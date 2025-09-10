/** @module services/records */

/**
 * Represents the header of a Cyclone in the HURDAT2 file
 */
export interface Header {
	basin: string;
  cycloneNumber: number;
  year: number;
  name: string;
  entries: number;
}
