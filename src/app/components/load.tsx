type LoaderType = {
  type: 'progressbar';
};

export function Loader({ type }: LoaderType) {
  switch (type) {
    case 'progressbar':
      return (
        <div className="size-full min-w-full min-h-dvh flex items-center justify-center relative">
          <div role="progressbar" className="progress">
            <div className="bar"></div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
