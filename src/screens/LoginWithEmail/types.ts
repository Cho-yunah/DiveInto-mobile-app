export type JWToken = {
  authorities: ('ROLE_STUDENT' | 'ROLE_INSTRUCTOR')[];
  client_id: string;
  exp: number;
  jti: string;
  scope: ['read' | 'write' | 'execute'];
  user_name: string;
};
