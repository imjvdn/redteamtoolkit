import { formatDistanceToNow as formatDistance } from 'date-fns';

export function formatTimeAgo(date: string | Date) {
  return formatDistance(new Date(date), { addSuffix: true });
}

export function formatPercentage(value: number, decimals = 1) {
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}