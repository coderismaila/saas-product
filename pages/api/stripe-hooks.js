const handler = async (req, res) => {
  console.log('event recieved');

  res.send({ recieved: true });
};

export default handler;
