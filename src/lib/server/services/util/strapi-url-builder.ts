import { env } from '$env/dynamic/private';

/**
 * Chainable URL builder for constructing Strapi API URLs with fields and populate
 * @example
 * const url = buildStrapiUrl('blogs')
 *   .fields(['title', 'slug', 'description'])
 *   .populate(['author', 'teaserImage'])
 *   .filter('slug', '$eq', 'my-blog-post')
 *   .build();
 */
class StrapiUrlBuilder {
	private endpoint: string;
	private fieldParams: string[] = [];
	private populateParams: string[] = [];
	private filterParams: string[] = [];
	private populateAllFlag = false;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	/**
	 * Add fields to select in the query
	 * @param fields - Array of field names to include
	 */
	fields(fields: readonly string[] | string[]): this {
		this.fieldParams = fields.map((field, index) => `fields[${index}]=${field}`);
		return this;
	}

	/**
	 * Add populate fields to include related data
	 * @param relations - Array of relation names to populate
	 */
	populate(relations: readonly string[] | string[]): this {
		this.populateParams = relations.map((field, index) => `populate[${index}]=${field}`);
		this.populateAllFlag = false;
		return this;
	}

	/**
	 * Populate all relations using populate=*
	 */
	populateAll(): this {
		this.populateAllFlag = true;
		this.populateParams = [];
		return this;
	}

	/**
	 * Add a filter to the query
	 * @param field - Field name to filter on
	 * @param operator - Strapi filter operator (e.g., '$eq', '$ne', '$contains')
	 * @param value - Value to filter by
	 */
	filter(field: string, operator: string, value: string | number | boolean): this {
		this.filterParams.push(`filters[${field}][${operator}]=${encodeURIComponent(value)}`);
		return this;
	}

	/**
	 * Build the complete URL
	 * @returns Complete Strapi API URL with all parameters
	 */
	build(): string {
		const baseUrl = env.STRAPI_URL;
		const populateParam = this.populateAllFlag ? ['populate=*'] : this.populateParams;
		const allParams = [...this.fieldParams, ...populateParam, ...this.filterParams];
		const queryString = allParams.length > 0 ? `?${allParams.join('&')}` : '';
		return `${baseUrl}/${this.endpoint}${queryString}`;
	}
}

/**
 * Creates a new Strapi URL builder
 * @param endpoint - The Strapi endpoint (e.g., 'blogs', 'projects')
 * @returns StrapiUrlBuilder instance
 * @example
 * const url = buildStrapiUrl('projects')
 *   .fields(['title', 'slug'])
 *   .populate(['teaserImage', 'tech'])
 *   .build();
 * @example
 * // Populate all relations
 * const url = buildStrapiUrl('projects')
 *   .populateAll()
 *   .build();
 */
export function buildStrapiUrl(endpoint: string): StrapiUrlBuilder {
	return new StrapiUrlBuilder(endpoint);
}
