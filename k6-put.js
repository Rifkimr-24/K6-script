import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const payload = JSON.stringify({
    email: 'newemail@example.com',
    name: 'Updated User',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Melakukan PUT request untuk mengupdate data pengguna
  const res = http.put('https://example.com/api/user/123', payload, params);

  // Memeriksa apakah update berhasil dengan status code 200
  check(res, {
    'status code is 200': (r) => r.status === 200,
  });
}
