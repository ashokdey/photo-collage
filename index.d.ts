import { Readable } from "stream";

export type CollageOptions = {
    sources: string[]|Buffer[];
    width: number;
    height: number;
    imageWidth: number;
    imageHeight: number;
    backgroundColor: string;
    backgroundImage: string;
    spacing: number;
}

export interface Canvas {
    jpegStream(): Readable
    pngStream(): Readable
}

export default function createImageCollage(options: CollageOptions): Promise<Canvas>