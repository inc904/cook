export default [
  {
    url: '/mapi/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: {
          'rows|10': [
            {
              id: '@guid',
              name: '@cname',
              'age|20-30': 23,
              'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
            },
          ],
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: (req, res) => {
      const body = req.body
      if (body.name !== 'admin' || body.password !== '123456') {
        return {
          code: 60204,
          message: `Username or password are incorrect.`,
        }
      }

      // const token = sign({ user: body.name }, secret, {
      //   expiresIn: 60,
      // })
      const token = 'lorem1231'
      return {
        code: 20000,
        data: token,
      }
    },
  },
]
