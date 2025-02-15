import type { BaseConfig } from "./BaseConfig";

export class AvaliacaoRoutes {
    protected config: BaseConfig;
    protected name: string;
    constructor(config: BaseConfig) {
        this.config = config;
        this.name = 'avaliacao';
    };

    get entity(): string {
        return `${this.name}`;
    };

    get delete(): string {
        return `${this.name}/${this.config.id}`;
    };
};
export default AvaliacaoRoutes;