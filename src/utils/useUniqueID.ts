import { useState } from "react";
import { customAlphabet } from "nanoid/non-secure";

const nanoid = customAlphabet("1234567890abcdef", 10);

export const useUniqueID = (): string => {
  const [id] = useState(nanoid());

  return id;
};
