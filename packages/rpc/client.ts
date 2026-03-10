import { createTuyau } from "@tuyau/core/client";
import type { TuyauConfiguration } from "@tuyau/core/types";

import { registry } from '@repo/server/registry';

export function createClient(options: Omit<TuyauConfiguration<any>, 'registry'>) {
  return createTuyau({
    registry,
    ...options,
  })
}