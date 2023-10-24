export interface CardInterface {
  imagePath: string;
  title: string;
  subTitle: string;
}

export const Card = ({ imagePath, title, subTitle }: CardInterface) => {
  return (
    <div className="font-semibold text-xl m-3 h-30 w-60 overflow-hidden p-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-all ease-in-out duration-500">
      <img
        src={imagePath}
        height={"200px"}
        width={"200px"}
        className="card-image  mb-4 rounded-full pointer-events-none"
      />
      <div>{title}</div>
      <div className="text-xs text-neutral-400 mb-6">{subTitle}</div>
    </div>
  );
};
