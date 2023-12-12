# 3jsproject

backend:

nodejs
express
postgresql

/////////////////

frontend:

svelte
typescript
3js


///backend 구동 방법
1. backend 폴더 내에 들어가서 npm i
2. postgresql 콘솔을 열고 입력

///////////////////////////

CREATE TABLE IF NOT EXISTS USERS (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    nickname VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS COMMNETS (
    id SERIAL PRIMARY KEY,
    uploader VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL
);
/////////////////////////


3. .env파일에 이 형식대로 작성
/////////////////////////


DB_USER={username_here}
PASS={password_here}
DB={database_here}
DB_PORT={database_port_here}
PORT={backend_port_here}


5. 전부다 작성후, backend 폴더 내 콘솔에서 nodemon server.js



///backend 부가 설명

1.다른 개발자가 사용하기 편하게 모듈화


///frontend 구동방법

1.frontend 폴더 내에 들어가서 npm i
2.그후 npm run dev
