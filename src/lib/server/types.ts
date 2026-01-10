import { z } from 'zod';

// ImageFormat
export type ImageFormat = z.infer<typeof ImageFormatSchema>;
const ImageFormatSchema = z.object({
	name: z.string(),
	hash: z.string(),
	ext: z.string(),
	mime: z.string(),
	path: z.string(),
	width: z.number(),
	height: z.number(),
	size: z.number(),
	sizeInBytes: z.number(),
	url: z.string()
});

// Formats
export type Formats = z.infer<typeof FormatsSchema>;
const FormatsSchema = z.object({
	thumbnail: ImageFormatSchema.optional(),
	medium: ImageFormatSchema.optional(),
	large: ImageFormatSchema.optional(),
	small: ImageFormatSchema.optional()
});

// Thumbnail
export type Thumbnail = z.infer<typeof ThumbnailSchema>;
const ThumbnailSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	name: z.string(),
	alternativeText: z.string(),
	caption: z.string(),
	formats: FormatsSchema.optional(),
	url: z.string()
});

// Icon
export type Icon = z.infer<typeof IconSchema>;
const IconSchema = z.object({
	iconIdentifier: z.string()
});

// Tech
export type Tech = z.infer<typeof TechSchema>;
const TechSchema = z.object({
	techLabel: z.string(),
	iconIdentifier: z.string().optional()
});

export type Tag = z.infer<typeof TagSchema>;
export const TagSchema = z.object({
	id: z.number(),
	value: z.string()
});

// Blog
export type Blog = z.infer<typeof BlogSchema>;
export const BlogSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	description: z.string(),
	content: z.string().optional(),
	released: z.string(),
	tags: z.array(TagSchema).optional(),
	slug: z.string()
});

// Project
export type Project = z.infer<typeof ProjectSchema>;
export const ProjectSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	slug: z.string(),
	description: z.string(),
	content: z.string().optional(),
	url: z.string().optional(),
	github_ref: z.string().optional(),
	thumbnail: ThumbnailSchema.optional(),
	highlight: z.boolean().optional(),
	projectIcon: IconSchema.optional(),
	tech: z.array(TechSchema).optional()
});

// TechItem
export type TechItem = z.infer<typeof TechItemSchema>;
export const TechItemSchema = z.object({
	icon: z.string(),
	color: z.string(),
	name: z.string()
});
