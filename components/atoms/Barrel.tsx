export const Barrel = (props: Props) => (
  <div className="flex gap-x-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      onClick={() => props.decrement()}
    >
      <polyline
        points="10,0 0,10 10,20 10,15 5,10 10,5"
        className="fill-pink-500/50"
      />
    </svg>
    {props.children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      onClick={() => props.increment()}
    >
      <polyline
        points="10,0 20,10 10,20 10,15 15,10 10,5"
        className="fill-pink-500/50"
      />
    </svg>
  </div>
);

type Props = {
  children: React.ReactNode;
  increment: () => void;
  decrement: () => void;
};
