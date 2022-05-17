const getString = (initialText, start, end) => {
  const from = initialText.indexOf(start);
  const to = initialText.indexOf(end);

  return initialText.substring(from, to).replace(start, '').trim();
};

const parseFirstVideo = async name => {
  const data = await fetch(`https://www.youtube.com/c/${name}/videos`);
  const result = await data.text();

  const title = getString(
    result,
    '"title":{"runs":[{"text":"',
    '"}],"accessibility":'
  );

  const thumbnail = getString(result, '{"thumbnails":[{"url":"', '","width"');

  const videoId = getString(
    result,
    '"gridVideoRenderer":{"videoId":"',
    '","thumbnail":'
  );

  return { title, videoId, thumbnail };
};

export default async function handler(req, res) {
  const result = [
    await parseFirstVideo('GuitarBattleRussia'),
    await parseFirstVideo('VIDEODROMEchannel')
  ];

  res.status(200).json(result);
}
