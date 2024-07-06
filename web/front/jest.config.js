module.exports = {
    testEnvironment: 'jsdom', // 기존의 'jsdom' 대신 'node'로 설정
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  };
  