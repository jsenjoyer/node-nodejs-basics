import fs from "fs/promises";
import crypto from "crypto";

const calculateHash = async () => {
  try {
    const fileData = await fs.readFile(
      "./files/fileToCalculateHashFor.txt",
      "utf-8"
    );
    const hash = crypto.createHash("sha256").update(fileData).digest("hex");
    console.log(hash);
  } catch (e) {
    console.log(e);
  }
};

await calculateHash();
