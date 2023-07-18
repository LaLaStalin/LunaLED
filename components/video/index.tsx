interface videoType {
  keyValue: any;
  srcVideo: string;
}

const Video = ({ keyValue, srcVideo }: videoType) => {
  return (
    <video
      autoPlay
      loop
      muted
      key={keyValue}
      className="w-full h-full object-cover"
    >
      <source src={srcVideo} />
    </video>
  );
};

export default Video;
