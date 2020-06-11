/**
 * Some numbers.
 */
export enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000,
}
/**
 * Says hello to you.
 * @param name
 */
export async function hello (name?: string): Promise<string> {
  const msg: string = "Hello, " + name + "!";
  return new Promise(resolve => setTimeout(() => resolve(msg), Delays.Long));
}
