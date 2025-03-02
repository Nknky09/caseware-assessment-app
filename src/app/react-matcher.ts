import { UrlSegment, UrlMatchResult } from '@angular/router';

export function reactMatcher(segments: UrlSegment[]): UrlMatchResult | null {
  if (segments.length > 0 && segments[0].path === 'react') {
    return { consumed: segments };
  }
  return null;
}
