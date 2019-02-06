const initialState = {
  schedule: [
    {
      id: 1,
      subject: 'test',
      body: 'this is my first test',
      to: 'someone',
      date: 'today 1/30/29'
    },
    {
      id: 2,
      subject: 'test',
      body: 'this is my second test',
      to: 'someone else',
      date: 'tommorw 1/30/29'
    },
    {
      id: 3,
      subject: 'test',
      body: 'this is my third test',
      to: 'no one',
      date: 'sooooon 1/30/29'
    }
  ]
};

const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default schedulesReducer;
