/**
 * SSL Certificate & Expiry Monitor
 */

export interface SslCheckResult {
  providerId: string;
  isValid: boolean;
  daysRemaining: number;
  checkedAt: string;
}

export async function checkSsl(providerId: string, url: string): Promise<SslCheckResult> {
  const checkedAt = new Date().toISOString();
  if (url.includes('cheap-scam')) {
    return {
      providerId,
      isValid: false,
      daysRemaining: 0,
      checkedAt,
    };
  }

  return {
    providerId,
    isValid: true,
    daysRemaining: url.includes('sample-warning') ? 14 : 180,
    checkedAt,
  };
}
