class Config {
  public readonly PORT: number;

  constructor() {
    this.PORT = Number(process.env.PORT);
  }
  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined || value === null) {
        throw new Error(`Config validation error: ${key} is not defined`);
      }
    }
  }
}

export const config: Config = new Config();
