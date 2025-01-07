class Config {
  public readonly PORT: number;

  public readonly CLIENT_URL: string;
  constructor() {
    this.PORT = Number(process.env.PORT);
    this.CLIENT_URL = process.env.CLIENT_URL!;
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
