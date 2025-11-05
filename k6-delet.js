import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.del('https://example.com/api/user/123');

  // Memeriksa apakah penghapusan berhasil dengan status code 200
  check(res, {
    'status code is 200': (r) => r.status === 200,
  });
}
