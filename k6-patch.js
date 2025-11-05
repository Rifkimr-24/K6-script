import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const payload = JSON.stringify({
    name: 'Updated Name',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Melakukan PATCH request untuk memperbarui sebagian data pengguna
  const res = http.patch('https://example.com/api/user/123', payload, params);

  // Memeriksa apakah update berhasil dengan status code 200
  check(res, {
    'status code is 200': (r) => r.status === 200,
  });
}
