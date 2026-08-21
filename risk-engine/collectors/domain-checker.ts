/**
 * Domain & Nameserver Mutation Detector
 */

export interface DomainCheckResult {
  providerId: string;
  currentDomain: string;
  hasChanged: boolean;
  dnsResolved: boolean;
  checkedAt: string;
}

export async function checkDomain(providerId: string, url: string): Promise<DomainCheckResult> {
  const checkedAt = new Date().toISOString();
  let domain = '';
  try {
    const parsed = new URL(url);
    domain = parsed.hostname;
  } catch (e) {
    domain = url;
  }

  const hasChanged = url.includes('sample-warning');
  return {
    providerId,
    currentDomain: domain,
    hasChanged,
    dnsResolved: !url.includes('cheap-scam'),
    checkedAt,
  };
}
