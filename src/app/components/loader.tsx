import classes from '@/client/styles/app.module.css';

type LoaderType = {
  type: 'progressbar' | 'logo';
};

export function Loader({ type }: LoaderType) {
  switch (type) {
    case 'progressbar':
      return (
        <div className="overflow-hidden size-full min-w-full min-h-full flex items-center justify-center relative">
          <div role="progressbar" className={classes.progress}>
            <div className={classes.progress_bar}></div>
          </div>
        </div>
      );

    case 'logo':
      return <LoaderLogo />;

    default:
      return null;
  }
}

export function LoaderLogo() {
  return (
    <div className="overflow-hidden size-full min-w-full min-h-full flex items-center justify-center relative">
      <div className={classes.logoloadRoot}>
        <div className={classes.logoloadWrap}>
          <div className={classes.logoloadS}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fillRule="evenodd"
              strokeWidth={0}
              height="100%"
              width="100%"
            >
              <polygon
                fill="#004fa3"
                points="14.27 4.1 16.91 5.27 16.91 5.45 16.91 5.45 15.86 5.91 14.39 5.26 12.03 4.22 9.68 5.26 8.2 5.91 7.16 5.45 7.16 5.45 7.16 5.45 7.16 5.27 9.8 4.1 9.04 3.77 11.71 2.59 12.03 1 12.36 2.59 15.03 3.77 14.27 4.1"
              />
              <path
                fill="#fabd0f"
                d="m15.05,19.53c.2-.56.31-1.16.31-1.78,0-2.11,0-4.22,0-6.33,0-2.06,1.79-3.59,3.77-3.17-.41-.89-1.2-1.5-2.23-1.5-2.07,0-3.76,2.1-3.76,4.72,0,2.11,0,4.19,0,6.29,0,.62-.19,1.19-.51,1.67.36.28.8.44,1.28.44.42,0,.8-.12,1.13-.34m-10.03-1.78c0,2.89,2.27,5.25,5.14,5.25h0c.19,0,.37-.01.56-.03-1.07-.68-1.93-1.68-2.42-2.87-.68-.55-1.06-1.4-1.06-2.35v-5.13c0-2.74-3.49-3.09-4.07-.91.09-.02.17-.02.26-.02.83,0,1.59.69,1.59,1.52v4.54Z"
              />
              <path
                fill="#004fa3"
                d="m16.83,12.62c0-2.73,3.43-3.09,4-.91-.09-.02-.17-.02-.26-.02-.83,0-1.52.69-1.52,1.52v4.54c0,2.89-2.27,5.25-5.14,5.25h0c-2.86,0-5.2-2.36-5.2-5.25,0-2.11,0-4.22,0-6.33,0-2.06-1.79-3.59-3.77-3.17.41-.89,1.2-1.5,2.23-1.5,2.07,0,3.76,2.1,3.76,4.72,0,2.11,0,4.19,0,6.29,0,1.66,1.34,3.01,2.99,3.01h0c1.64,0,2.92-1.36,2.92-3.01v-5.13Z"
              />
              <path
                fill="#fabd0f"
                d="m12.03,8.99c-.22-.48-.5-.93-.82-1.35-.44-.56-.96-1.04-1.54-1.41h.01s2.35-1.04,2.35-1.04l2.34,1.03h.03c-.58.38-1.1.86-1.54,1.42-.33.42-.6.87-.82,1.35"
              />
            </svg>
          </div>

          <div className={classes.boxloadX}></div>
          <div className={classes.boxloadY}></div>
        </div>
      </div>
    </div>
  );
}
