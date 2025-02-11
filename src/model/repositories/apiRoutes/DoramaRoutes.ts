import type { BaseConfig } from "./BaseConfig";

class DoramaRoutes {
    protected config: BaseConfig;
    protected name: string;

    constructor(config: BaseConfig) {
        this.config = config;
        this.name = "dorama";
    }

    get entity(): string {
        return `${this.name}`;
    }

    get delete(): string {
        return this.config.id ? `${this.name}/${this.config.id}` : "";
    }

}

export default DoramaRoutes;
