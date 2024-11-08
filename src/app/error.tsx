"use client";

import { useEffect } from "react";

export default function Error({
  error
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="h-screen w-full overflow-hidden relative">
      <Illustrations />
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-wrap -mx-4 h-full items-center">
          <div className="font-mono text-center px-4 relative w-full">
            <h1 className="font-bold text-10 text-[5rem] tracking-875">500</h1>
            <h4 className="text-[2rem] font-bold mb-1 mt-0">Error</h4>
            <p className="text-[1.25rem] font-normal leading-normal text-blueGray-500">
              We are sorry. This was unexpected.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Illustrations() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1199"
      viewBox="0 0 1586 1199"
      width="1586"
      className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full h-auto grayscale"
    >
      <g fill="none" fillRule="evenodd" transform="translate(.589219 .178782)">
        <path
          d="m1543.70108 477.111984c0-19.012675-15.4045-34.42579-34.41576-34.42579-19.01127 0-34.41577 15.413115-34.41577 34.42579 0 19.012676 15.4045 34.425791 34.41577 34.425791 19.01126 0 34.41576-15.413115 34.41576-34.425791zm-34.41576-75.736738c41.82203 0 75.71468 33.908026 75.71468 75.736738 0 41.828713-33.89265 75.736739-75.71468 75.736739-41.82204 0-75.71469-33.908026-75.71469-75.736739 0-41.828712 33.89265-75.736738 75.71469-75.736738z"
          fill="#fd6234"
        />
        <path
          d="m1507.81227 497.445972c-11.38372 0-20.62268-9.236149-20.62268-20.628683 0-11.392535 9.23896-20.628684 20.62268-20.628684s20.62267 9.236149 20.62267 20.628684c0 11.392534-9.23895 20.628683-20.62267 20.628683z"
          fill="#11cdef"
        />
        <path
          d="m243.347584 1178.78193c0-11.39254 9.233459-20.62869 20.622676-20.62869h123.73606c11.389217 0 20.622676 9.23615 20.622676 20.62869 0 11.39253-9.233459 20.62868-20.622676 20.62868h-123.73606c-11.389217 0-20.622676-9.23615-20.622676-20.62868z"
          fill="#2d374c"
        />
        <path
          d="m398.128253 612.557957c0 41.828712-33.854186 75.736738-75.616481 75.736738h-137.484511c-41.762294 0-75.61648-33.908026-75.61648-75.736738s33.854186-75.736739 75.61648-75.736739h137.484511c41.762295 0 75.616481 33.908027 75.616481 75.736739zm-75.616481 34.42579c18.982486 0 34.371128-15.413115 34.371128-34.42579 0-19.012676-15.388642-34.425791-34.371128-34.425791h-137.484511c-18.982486 0-34.371127 15.413115-34.371127 34.425791 0 19.012675 15.388641 34.42579 34.371127 34.42579z"
          fill="#5e72e4"
        />
        <path
          d="m83.0799257 1090.37328c0 11.39254 9.2357668 20.62868 20.6287513 20.62868h63.949128c21.673941 0 41.218995-9.1165 55.010002-23.72436 13.791008 14.60786 33.336062 23.72436 55.010003 23.72436h63.261503c41.774596 0 75.638754-33.86404 75.638754-75.6385 0-11.39254-9.23618-20.62869-20.628751-20.62869-11.392572 0-20.628751 9.23615-20.628751 20.62869 0 18.98801-15.393174 34.38114-34.381252 34.38114h-63.261503c-18.988078 0-34.381252-15.39313-34.381252-34.38114v-138.899806c0-41.013949-33.24942-74.263261-74.263503-74.263261v41.257367c18.228939 0 33.006001 14.777014 33.006001 33.005894v138.899806c0 18.98801-15.393174 34.38114-34.381251 34.38114h-63.949128c-11.3929845 0-20.6287513 9.23615-20.6287513 20.62868z"
          fill="#5e72e4"
        />
        <path
          d="m630.34758 112.772855c13.440106-13.4073918 13.440106-35.1451885 0-48.5525801s-35.230891-13.4073916-48.670997 0c-13.440105 13.4073916-13.440105 35.1451883 0 48.5525801 8.064339 8.044352 8.064339 21.087552 0 29.130806-8.064338 8.044627-21.139635 8.044627-29.202598 0-29.568783-29.495685-29.568783-77.3185077 0-106.8148791 29.567407-29.49623409 77.50741-29.49624782 107.076193 0 29.568784 29.4963714 29.568784 77.3191941 0 106.8148791-8.064339 8.044627-21.138259 8.044627-29.202598 0-8.064339-8.043254-8.064339-21.086454 0-29.130806z"
          fill="#11cdef"
        />
        <path
          d="m553.42514 113.311148c8.053843-8.05599 21.110747-8.05599 29.16459 0 8.053842 8.055991 8.053842 21.11715 0 29.173278-8.053843 8.056129-21.110747 8.056129-29.16459 0-8.053842-8.056128-8.053842-21.117287 0-29.173278z"
          fill="#fd6234"
        />
        <path
          d="m169.105948 863.45776c-11.389217 0-20.622677-9.236149-20.622677-20.628683 0-11.392535 9.23346-20.628684 20.622677-20.628684s20.622677 9.236149 20.622677 20.628684c0 11.392534-9.23346 20.628683-20.622677 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m110.130453 929.764244c0-19.012676-15.4084891-34.425791-34.4157657-34.425791s-34.4157654 15.413115-34.4157654 34.425791c0 19.012675 15.4084888 34.42579 34.4157654 34.42579s34.4157657-15.413115 34.4157657-34.42579zm-34.4157657-75.736739c41.8161187 0 75.7146837 33.908026 75.7146837 75.736739 0 41.828712-33.898565 75.736736-75.7146837 75.736736s-75.7146873-33.908024-75.7146873-75.736736c0-41.828713 33.8985686-75.736739 75.7146873-75.736739z"
          fill="#2d374c"
        />
        <path
          d="m139.055762 752.106853c-23.483323 0-42.5203851 19.107382-42.5203851 42.678063v79.84928c0 11.40468-9.2114242 20.650676-20.5743799 20.650676s-20.5743799-9.245996-20.5743799-20.650676v-79.84928c0-46.380041 37.4599107-83.979415 83.6691449-83.979415z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m76.0092937 895.284872c-11.3896293 0-20.6226766-9.236149-20.6226766-20.628683 0-11.392535 9.2330473-20.628684 20.6226766-20.628684s20.6226766 9.236149 20.6226766 20.628684c0 11.392534-9.2330473 20.628683-20.6226766 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m75.4200743 950.098232c-11.3896293 0-20.6226765-9.236149-20.6226765-20.628684 0-11.392534 9.2330472-20.628684 20.6226765-20.628684 11.3896294 0 20.6226766 9.23615 20.6226766 20.628684 0 11.392535-9.2330472 20.628684-20.6226766 20.628684z"
          fill="#fd6234"
        />
        <path
          d="m79.5883583 538.061599c19.0334203-.247872 34.2622247-15.859699 34.0147597-34.871507-.247603-19.011809-15.8778651-34.224285-34.9111475-33.976413-11.4200522.148724-20.7982097-8.978487-20.9466886-20.386123-.1486167-11.406258 8.9886934-20.774456 20.4087456-20.923179 41.8733865-.543942 76.2595505 32.921578 76.8041115 74.748658.54456 41.825703-32.958589 76.172547-74.8318378 76.716489-11.4200522.148724-20.7982096-8.978487-20.9468264-20.386123-.1484788-11.406258 8.9888313-20.774456 20.4088835-20.921802z"
          fill="#2d374c"
        />
        <path
          d="m180.048593 686.081462c-19.017705 0-34.434896 15.404458-34.434896 34.406456 0 19.001999 15.417191 34.406457 34.434896 34.406457 75.310495 0 136.362188 61.001272 136.362188 136.24957 0 11.400924-9.250591 20.643874-20.660938 20.643874s-20.660937-9.24295-20.660937-20.643874c0-52.44645-42.550513-94.961821-95.040313-94.961821-41.839776 0-75.756771-33.888984-75.756771-75.694206 0-41.805221 33.916995-75.694205 75.756771-75.694205 11.410347 0 20.660937 9.242951 20.660937 20.643874 0 11.400924-9.25059 20.643875-20.660937 20.643875z"
          fill="#2d374c"
        />
        <path
          d="m485.463163 1035.60202c0-18.94926-15.408626-34.31097-34.415765-34.31097s-34.415766 15.36171-34.415766 34.31097c0 11.36929-9.245451 20.58659-20.649459 20.58659s-20.649459-9.2173-20.649459-20.58659c0-41.689205 33.898152-75.484142 75.714684-75.484142 41.816531 0 75.714684 33.794937 75.714684 75.484142 0 11.36929-9.245451 20.58659-20.649459 20.58659-11.404009 0-20.64946-9.2173-20.64946-20.58659z"
          fill="#11cdef"
        />
        <path
          d="m869.647097 51.3583091c-76.079562 0-137.755416 61.6931309-137.755416 137.7955419 0 11.414983-9.251654 20.669332-20.663313 20.669332s-20.663312-9.254349-20.663312-20.669332c0-98.9330651 80.177785-179.1342046 179.082041-179.1342046 11.411658 0 20.663312 9.2539352 20.663312 20.6693313s-9.251654 20.6693314-20.663312 20.6693314z"
          fill="#2d374c"
        />
        <path
          d="m1066.44398 178.563951c0-69.949367-56.68892-126.654525-126.617643-126.654525-11.401093 0-20.644181-9.2453674-20.644181-20.6501944 0-11.4048269 9.243088-20.6501943 20.644181-20.6501943 92.732283 0 167.906003 75.1960306 167.906003 167.9549137 0 11.404414-9.24309 20.650194-20.64418 20.650194s-20.64418-9.24578-20.64418-20.650194z"
          fill="#5e72e4"
        />
        <g fill="#fd6234">
          <path d="m58.9237124 559.011497c-.1480704-11.392686 8.9641012-20.748605 20.3527345-20.895758 11.3886334-.148529 20.7409901 8.96672 20.8890601 20.35803.14807 11.392685-8.9641012 20.747229-20.3527346 20.895758-11.3884959.148528-20.7408521-8.96672-20.88906-20.35803z" />
          <path d="m295.788104 911.787819c-11.389217 0-20.622676-9.236149-20.622676-20.628683 0-11.392535 9.233459-20.628684 20.622676-20.628684s20.622677 9.236149 20.622677 20.628684c0 11.392534-9.23346 20.628683-20.622677 20.628683z" />
          <path d="m395.95539 1056.18861c-11.389217 0-20.622676-9.23615-20.622676-20.62869 0-11.39253 9.233459-20.62868 20.622676-20.62868s20.622677 9.23615 20.622677 20.62868c0 11.39254-9.23346 20.62869-20.622677 20.62869z" />
          <path d="m103.113383 1111.00196c-11.3896294 0-20.6226767-9.23614-20.6226767-20.62868 0-11.39253 9.2330473-20.62868 20.6226767-20.62868 11.389629 0 20.622676 9.23615 20.622676 20.62868 0 11.39254-9.233047 20.62868-20.622676 20.62868z" />
        </g>
        <path
          d="m295.788104 966.601179c-11.389217 0-20.622676-9.23615-20.622676-20.628684s9.233459-20.628684 20.622676-20.628684 20.622677 9.23615 20.622677 20.628684-9.23346 20.628684-20.622677 20.628684z"
          fill="#11cdef"
        />
        <path
          d="m295.788104 1022.00393c-11.389217 0-20.622676-9.23615-20.622676-20.62868 0-11.392539 9.233459-20.628688 20.622676-20.628688s20.622677 9.236149 20.622677 20.628688c0 11.39253-9.23346 20.62868-20.622677 20.62868z"
          fill="#11cdef"
        />
        <path
          d="m451.342007 1063.2613c-11.389216 0-20.622676-9.23615-20.622676-20.62869 0-11.39253 9.23346-20.62868 20.622676-20.62868 11.389217 0 20.622677 9.23615 20.622677 20.62868 0 11.39254-9.23346 20.62869-20.622677 20.62869z"
          fill="#fd6234"
        />
        <path
          d="m451.342007 1118.07466c-11.389216 0-20.622676-9.23615-20.622676-20.62869 0-11.39253 9.23346-20.62868 20.622676-20.62868 11.389217 0 20.622677 9.23615 20.622677 20.62868 0 11.39254-9.23346 20.62869-20.622677 20.62869z"
          fill="#fd6234"
        />
        <path
          d="m307.033457 766.078585c-11.389217 0-20.622676-9.236149-20.622676-20.628683 0-11.392535 9.233459-20.628684 20.622676-20.628684s20.622677 9.236149 20.622677 20.628684c0 11.392534-9.23346 20.628683-20.622677 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m181.479554 686.051081c-11.389217 0-20.622677-9.23615-20.622677-20.628684 0-11.392535 9.23346-20.628684 20.622677-20.628684s20.622676 9.236149 20.622676 20.628684c0 11.392534-9.233459 20.628684-20.622676 20.628684z"
          fill="#fd6234"
        />
        <path
          d="m1153.1558 655.697446c0-19.012676 15.40862-34.42579 34.41576-34.42579s34.41577 15.413114 34.41577 34.42579c0 19.012675-15.40863 34.42579-34.41577 34.42579-11.40401 0-20.64946 9.248145-20.64946 20.655474 0 11.40733 9.24545 20.655475 20.64946 20.655475 41.81653 0 75.71469-33.908027 75.71469-75.736739s-33.89816-75.736739-75.71469-75.736739-75.71468 33.908027-75.71468 75.736739c0 11.40733 9.24545 20.655474 20.64946 20.655474 11.404 0 20.64946-9.248144 20.64946-20.655474z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m589.033457 221.078585c-11.390591 0-20.622676-9.236149-20.622676-20.628683 0-11.392535 9.232085-20.628684 20.622676-20.628684 11.389217 0 20.622677 9.236149 20.622677 20.628684 0 11.392534-9.23346 20.628683-20.622677 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m656.390335 269.35167c-11.390592 0-20.622677-9.236149-20.622677-20.628684 0-11.392534 9.232085-20.628683 20.622677-20.628683 11.389216 0 20.622676 9.236149 20.622676 20.628683 0 11.392535-9.23346 20.628684-20.622676 20.628684z"
          fill="#fd6234"
        />
        <path
          d="m364.033457 510.078585c-11.389217 0-20.622676-9.236149-20.622676-20.628683 0-11.392535 9.233459-20.628684 20.622676-20.628684s20.622677 9.236149 20.622677 20.628684c0 11.392534-9.23346 20.628683-20.622677 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m561.033457 1001.07859c-11.389217 0-20.622676-9.236154-20.622676-20.628688 0-11.392535 9.233459-20.628684 20.622676-20.628684s20.622677 9.236149 20.622677 20.628684c0 11.392534-9.23346 20.628688-20.622677 20.628688z"
          fill="#5e72e4"
        />
        <path
          d="m1409.24004 478.33874c0 41.802217-33.90304 75.688765-75.7256 75.688765h-137.6829c-41.82255 0-75.72559-33.886548-75.72559-75.688765s33.90304-75.688765 75.72559-75.688765h44.05853v-43.34902c0-41.800841 33.90304-75.688765 75.7256-75.688765h137.6829c19.01401 0 34.42072-15.403352 34.42072-34.403984v-63.303331c0-19.000632-15.40671-34.403984-34.42072-34.403984-11.40015 0-20.65244-9.242286-20.65244-20.642391 0-11.400517 9.25229-20.64239 20.65244-20.64239 41.82806 0 75.72559 33.886548 75.72559 75.688765v63.303331c0 21.688271-9.12837 41.247624-23.7503 55.046374 14.62193 13.800126 23.7503 33.358103 23.7503 55.046375v61.927171c0 11.400104-9.25229 20.642391-20.65243 20.642391-11.40015 0-20.65244-9.242287-20.65244-20.642391v-61.927171c0-19.000632-15.40671-34.403984-34.42072-34.403984h-137.6829c-19.00988 0-34.42073 15.403352-34.42073 34.403984v43.34902h52.3195c41.82256 0 75.7256 33.886548 75.7256 75.688765zm-213.4085-34.403984c-19.00987 0-34.42072 15.403352-34.42072 34.403984s15.41085 34.403984 34.42072 34.403984h137.6829c19.00988 0 34.42073-15.403352 34.42073-34.403984s-15.41085-34.403984-34.42073-34.403984z"
          fill="#5e72e4"
        />
        <path
          d="m1100.16244 280.108858c23.4864 9.552333 50.08504-1.653209 59.52367-24.762405 9.43724-23.109197-1.73515-49.677353-25.22155-59.229685-12.97639-5.277077-26.90573-4.231281-38.41551 1.709553-10.13406 5.230352-22.5968 1.272545-27.83803-8.839103s-1.27519-22.548508 8.85749-27.77886c21.827-11.266008 48.38019-13.277894 72.98755-3.269314 44.44583 18.075361 66.00567 68.603367 47.88719 112.966538-18.11847 44.364546-68.92786 65.457735-113.37369 47.382374-10.56371-4.297244-15.63832-16.327329-11.33213-26.869114 4.3048-10.543158 16.35992-15.605853 26.92501-11.309984z"
          fill="#2d374c"
        />
        <path
          d="m1408.82342 482.711198c0 52.407859 42.46897 94.891945 94.86431 94.891945 11.38372 0 20.62268 9.23615 20.62268 20.628684s-9.23896 20.628684-20.62268 20.628684c-75.17653 0-136.10966-60.956385-136.10966-136.149313 0-11.392534 9.23896-20.628683 20.62267-20.628683 11.38372 0 20.62268 9.236149 20.62268 20.628683z"
          fill="#2d374c"
        />
        <path
          d="m1388.20074 502.1611c-11.38371 0-20.62267-9.236149-20.62267-20.628683 0-11.392535 9.23896-20.628684 20.62267-20.628684 11.38372 0 20.62268 9.236149 20.62268 20.628684 0 11.392534-9.23896 20.628683-20.62268 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m455.466543 1156.97446c52.392597 0 94.864312-42.48409 94.864312-94.89195 0-11.39253 9.23346-20.62868 20.622677-20.62868 11.389216 0 20.622676 9.23615 20.622676 20.62868 0 75.19293-60.938634 136.14932-136.109665 136.14932-11.389217 0-20.622677-9.23615-20.622677-20.62869 0-11.39253 9.23346-20.62868 20.622677-20.62868z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m800.749071 289.980354c-11.389217 0-20.622677-9.23615-20.622677-20.628684s9.23346-20.628684 20.622677-20.628684c11.389216 0 20.622676 9.23615 20.622676 20.628684s-9.23346 20.628684-20.622676 20.628684z"
          fill="#fd6234"
        />
        <path
          d="m1086.41078 912.449902c0 11.392534 9.23346 20.628683 20.62268 20.628683 11.38921 0 20.62267-9.236149 20.62267-20.628683 0-11.392535-9.23346-20.628684-20.62267-20.628684-11.38922 0-20.62268 9.236149-20.62268 20.628684z"
          fill="#fd6234"
        />
        <path
          d="m1463.91543 1198.23183c-41.82204 0-75.71469-33.86405-75.71469-75.63851v-137.524558c0-41.774459 33.89265-75.638507 75.71469-75.638507s75.71468 33.864048 75.71468 75.638507v137.524558c0 41.77446-33.89264 75.63851-75.71468 75.63851zm34.41576-75.63851v-137.524558c0-18.988015-15.40449-34.381139-34.41576-34.381139s-34.41577 15.393124-34.41577 34.381139v137.524558c0 18.98802 15.4045 34.38114 34.41577 34.38114s34.41576-15.39312 34.41576-34.38114z"
          fill="#5e72e4"
        />
        <path
          d="m1484.95056 930.088409c0-41.714782 33.94539-75.530452 75.83253-75.530452 11.41624 0 20.68159-9.222955 20.68159-20.599214 0-11.37626-9.26535-20.599215-20.68159-20.599215-64.71962 0-117.19573 52.26158-117.19573 116.728881 0 11.376259 9.26536 20.599214 20.6816 20.599214s20.6816-9.222955 20.6816-20.599214z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m1484.83271 930.058939c0-11.39391-9.23896-20.628684-20.62267-20.628684-11.38372 0-20.62268 9.234774-20.62268 20.628684 0 11.392534 9.23896 20.628684 20.62268 20.628684 11.38371 0 20.62267-9.23615 20.62267-20.628684z"
          fill="#fd6234"
        />
        <path
          d="m1279.48978 1088.0693c-19.00714 0-34.41577 15.41311-34.41577 34.42579 0 19.01267 15.40863 34.42579 34.41577 34.42579s34.41576-15.41312 34.41576-34.42579c0-19.01268-15.40862-34.42579-34.41576-34.42579zm-75.71469 34.42579c0-41.82871 33.89816-75.73674 75.71469-75.73674s75.71468 33.90803 75.71468 75.73674-33.89815 75.73674-75.71468 75.73674-75.71469-33.90803-75.71469-75.73674z"
          fill="#2d374c"
        />
        <path
          d="m866.751795 988.998035c11.394827 0 20.632835 9.259711 20.632835 20.681305 0 19.03646 15.396222 34.46885 34.388059 34.46885h137.552241c18.99183 0 34.38806-15.43239 34.38806-34.46885 0-11.421594 9.238-20.681305 20.63283-20.681305s20.63284 9.259711 20.63284 20.681305c0 25.38286-12.4416 47.85241-31.54486 61.61651 4.84734 17.79006 21.17892 30.76 41.17351 30.76h79.7803c11.39483 0 20.63284 9.25971 20.63284 20.68131s-9.23801 20.68131-20.63284 20.68131h-79.7803c-37.31929 0-69.37447-23.97515-80.09254-58.08277-1.71527.11582-3.44568.17511-5.18984.17511h-137.552241c-41.782867 0-75.65373-33.95044-75.65373-75.83147 0-11.421594 9.238008-20.681305 20.632836-20.681305z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m1134.89 1009.33202c0 19.01268 15.40862 34.42579 34.41576 34.42579s34.41577-15.41311 34.41577-34.42579c0-19.012672-15.40863-34.425787-34.41577-34.425787-11.40401 0-20.64946-9.248144-20.64946-20.655474s9.24545-20.655474 20.64946-20.655474c41.81653 0 75.71469 33.908026 75.71469 75.736735 0 41.82872-33.89816 75.73674-75.71469 75.73674s-75.71468-33.90802-75.71468-75.73674c0-11.407326 9.24545-20.655471 20.64946-20.655471s20.64946 9.248145 20.64946 20.655471z"
          fill="#11cdef"
        />
        <path
          d="m1134.83643 1009.03733c0 11.39253-9.23346 20.62868-20.62268 20.62868-11.38921 0-20.62267-9.23615-20.62267-20.62868 0-11.392536 9.23346-20.628686 20.62267-20.628686 11.38922 0 20.62268 9.23615 20.62268 20.628686z"
          fill="#fd6234"
        />
        <path
          d="m887.364312 1009.62672c0 11.39253-9.233459 20.62868-20.622676 20.62868s-20.622677-9.23615-20.622677-20.62868c0-11.392535 9.23346-20.628685 20.622677-20.628685s20.622676 9.23615 20.622676 20.628685z"
          fill="#fd6234"
        />
        <path
          d="m1245.02045 1122.78978c0 11.39254-9.23346 20.62869-20.62268 20.62869s-20.62268-9.23615-20.62268-20.62869c0-11.39253 9.23346-20.62868 20.62268-20.62868s20.62268 9.23615 20.62268 20.62868z"
          fill="#fd6234"
        />
        <path
          d="m1300.40706 1122.20039c0 11.39254-9.23346 20.62869-20.62267 20.62869-11.38922 0-20.62268-9.23615-20.62268-20.62869 0-11.39253 9.23346-20.62868 20.62268-20.62868 11.38921 0 20.62267 9.23615 20.62267 20.62868z"
          fill="#fd6234"
        />
        <path
          d="m1018.21309 1030.30898c-18.943746 0-34.300982 15.41312-34.300982 34.42579 0 19.01268 15.357236 34.42579 34.300982 34.42579 11.36597 0 20.58059 9.24815 20.58059 20.65548s-9.21462 20.65547-20.58059 20.65547c-41.677065 0-75.462161-33.90802-75.462161-75.73674 0-41.82871 33.785096-75.736735 75.462161-75.736735 11.36597 0 20.58059 9.248145 20.58059 20.655475s-9.21462 20.65547-20.58059 20.65547z"
          fill="#2d374c"
        />
        <path
          d="m1309.79308 50.1812446c-73.8014 0-133.62831 59.8448854-133.62831 133.6672294 0 11.415457-9.25204 20.67019-20.66417 20.67019s-20.66417-9.254733-20.66417-20.67019c0-96.6540846 78.33099-175.00760956 174.95665-175.00760956 11.41213 0 20.66417 9.25431976 20.66417 20.67019006 0 11.4158704-9.25204 20.6701901-20.66417 20.6701901z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m1273.89219 994.302554c0-52.407859-42.47171-94.891945-94.86431-94.891945-11.38922 0-20.62268-9.236149-20.62268-20.628684 0-11.392534 9.23346-20.628683 20.62268-20.628683 75.17103 0 136.10967 60.956385 136.10967 136.149312 0 11.392536-9.23346 20.628686-20.62268 20.628686s-20.62268-9.23615-20.62268-20.628686z"
          fill="#fd6234"
        />
        <path
          d="m42.4237509 1062.08251c0 52.40786 42.4720414 94.89195 94.8641201 94.89195 11.389469 0 20.62291 9.23615 20.62291 20.62868 0 11.39254-9.233441 20.62869-20.62291 20.62869-75.1711537 0-136.10943234-60.95639-136.10943234-136.14932 0-11.39253 9.23307114-20.62868 20.62267744-20.62868 11.3894687 0 20.6226348 9.23615 20.6226348 20.62868z"
          fill="#5e72e4"
        />
        <path
          d="m1038.79368 1009.62672c0 11.39253-9.23346 20.62868-20.62268 20.62868-11.38921 0-20.622673-9.23615-20.622673-20.62868 0-11.392535 9.233463-20.628685 20.622673-20.628685 11.38922 0 20.62268 9.23615 20.62268 20.628685z"
          fill="#fd6234"
        />
        <path
          d="m433.370818 123.12913c-19.007139 0-34.415766-15.412977-34.415766-34.4257901 0-19.0128132 15.408627-34.4257903 34.415766-34.4257903s34.415765 15.4129771 34.415765 34.4257903c0 19.0128131-15.408626 34.4257901-34.415765 34.4257901zm-75.714684-34.4257901c0 41.8282991 33.898152 75.7367391 75.714684 75.7367391s75.714684-33.90844 75.714684-75.7367391c0-41.8281615-33.898152-75.7367387-75.714684-75.7367387s-75.714684 33.9084395-75.714684 75.7367387z"
          fill="#2d374c"
        />
        <path
          d="m20.6226793 180.943026c11.3896291 0 20.6226763 9.246704 20.6226763 20.652259 0 19.009716 15.3885037 34.420432 34.3711273 34.420432h137.4845091c18.982486 0 34.371127-15.410716 34.371127-34.420432 0-11.405555 9.23346-20.652259 20.622677-20.652259 11.389216 0 20.622676 9.246704 20.622676 20.652259 0 41.822202-33.854185 75.724951-75.61648 75.724951h-134.7091093c-.008524 0-.0171856 0-.0257096 0-18.9826237 0-34.3711273 15.410716-34.3711273 34.420432v137.681729c0 19.009716 15.3885036 34.420432 34.3711273 34.420432 11.3896292 0 20.6226764 9.246705 20.6226764 20.652259 0 11.405555-9.2330472 20.65226-20.6226764 20.65226-41.761882 0-75.61649378-33.902749-75.61649378-75.724951v-137.681729c0-21.026754 8.55805328-40.052992 22.37630508-53.774353-15.42369971-13.863173-25.1259844-33.982604-25.1259844-56.37103 0-11.405555 9.23309131-20.652259 20.6226793-20.652259z"
          fill="#5e72e4"
        />
        <path
          d="m218.521983 126.320653c10.89271-33.6273641 42.551649-57.9513013 79.908814-57.9513013h79.826028c11.401358 0 20.644662 9.2141527 20.644662 20.5804741 0 11.3661842-9.243304 20.5804742-20.644662 20.5804742h-79.826028c-19.514217 0-35.968299 13.059795-41.047442 30.889963 18.983716 13.713208 31.334117 36.013416 31.334117 61.193546 0 11.369284-9.23346 20.586584-20.622676 20.586584-11.389218 0-20.622677-9.2173-20.622677-20.586584 0-18.949265-15.388642-34.310974-34.371128-34.310974h-137.4845115c-18.982624 0-34.3711263 15.361709-34.3711263 34.310974 0 11.369284-9.2330489 20.586584-20.6226766 20.586584-11.38958983 0-20.6226766-9.2173-20.6226766-20.586584 0-41.689206 33.8545967-75.484143 75.6164795-75.484143h137.4845115c1.82278 0 3.630496.06438 5.420988.190987z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m288.771038 201.866405c0-19.012676 15.408626-34.425791 34.415765-34.425791s34.415765 15.413115 34.415765 34.425791c0 19.012675-15.408626 34.42579-34.415765 34.42579-11.404008 0-20.649459 9.248144-20.649459 20.655474s9.245451 20.655474 20.649459 20.655474c41.816532 0 75.714684-33.908026 75.714684-75.736738 0-41.828713-33.898152-75.736739-75.714684-75.736739s-75.714684 33.908026-75.714684 75.736739c0 11.40733 9.245451 20.655474 20.649459 20.655474s20.64946-9.248144 20.64946-20.655474z"
          fill="#11cdef"
        />
        <path
          d="m288.717472 202.1611c0-11.392534-9.23346-20.628683-20.622676-20.628683-11.389217 0-20.622677 9.236149-20.622677 20.628683 0 11.392535 9.23346 20.628684 20.622677 20.628684 11.389216 0 20.622676-9.236149 20.622676-20.628684z"
          fill="#fd6234"
        />
        <path
          d="m41.2453532 201.571709c0-11.392534-9.2334598-20.628683-20.6226766-20.628683-11.38921687 0-20.6226766 9.236149-20.6226766 20.628683 0 11.392535 9.23345973 20.628684 20.6226766 20.628684 11.3892168 0 20.6226766-9.236149 20.6226766-20.628684z"
          fill="#11cdef"
        />
        <path
          d="m268.094796 327.111984c0-11.392534-9.23346-20.628683-20.622677-20.628683s-20.622677 9.236149-20.622677 20.628683c0 11.392535 9.23346 20.628684 20.622677 20.628684s20.622677-9.236149 20.622677-20.628684z"
          fill="#11cdef"
        />
        <path
          d="m268.094796 381.925344c0-11.392535-9.23346-20.628684-20.622677-20.628684s-20.622677 9.236149-20.622677 20.628684c0 11.392534 9.23346 20.628684 20.622677 20.628684s20.622677-9.23615 20.622677-20.628684z"
          fill="#11cdef"
        />
        <path
          d="m222.724907 1178.78193c0-11.39254-9.23346-20.62869-20.622677-20.62869-11.389216 0-20.622676 9.23615-20.622676 20.62869 0 11.39253 9.23346 20.62868 20.622676 20.62868 11.389217 0 20.622677-9.23615 20.622677-20.62868z"
          fill="#11cdef"
        />
        <path
          d="m284.592937 1178.78193c0-11.39254-9.23346-20.62869-20.622677-20.62869s-20.622676 9.23615-20.622676 20.62869c0 11.39253 9.233459 20.62868 20.622676 20.62868s20.622677-9.23615 20.622677-20.62868z"
          fill="#fd6234"
        />
        <path
          d="m470.786245 1177.60314c0-11.39253-9.233459-20.62868-20.622676-20.62868s-20.622677 9.23615-20.622677 20.62868c0 11.39254 9.23346 20.62869 20.622677 20.62869s20.622676-9.23615 20.622676-20.62869z"
          fill="#11cdef"
        />
        <path
          d="m398.901487 88.9980354c0-11.3928095-9.23346-20.6286837-20.622677-20.6286837-11.389216 0-20.622676 9.2358742-20.622676 20.6286837 0 11.3929466 9.23346 20.6286836 20.622676 20.6286836 11.389217 0 20.622677-9.235737 20.622677-20.6286836z"
          fill="#fd6234"
        />
        <path
          d="m454.288104 88.9980354c0-11.392947-9.23346-20.6286837-20.622676-20.6286837-11.389217 0-20.622677 9.2357367-20.622677 20.6286837 0 11.3929466 9.23346 20.6286836 20.622677 20.6286836 11.389216 0 20.622676-9.235737 20.622676-20.6286836z"
          fill="#fd6234"
        />
        <path
          d="m199.198221 180.889445c-18.943747 0-34.300983-15.413115-34.300983-34.425791 0-19.012813 15.357236-34.42579 34.300983-34.42579 11.365973 0 20.580589-9.247731 20.580589-20.6554743 0-11.407743-9.214616-20.6554742-20.580589-20.6554742-41.677066 0-75.462162 33.9084395-75.462162 75.7367385 0 41.828712 33.785096 75.736739 75.462162 75.736739 11.365973 0 20.580589-9.248144 20.580589-20.655474s-9.214616-20.655474-20.580589-20.655474z"
          fill="#2d374c"
        />
        <path
          d="m96.6319703 388.998035c52.3925977 0 94.8643127 42.484087 94.8643127 94.891945 0 11.392535 9.233459 20.628684 20.622676 20.628684s20.622677-9.236149 20.622677-20.628684c0-75.192927-60.938635-136.149312-136.1096657-136.149312-11.3896293 0-20.6226766 9.236149-20.6226766 20.628684 0 11.392534 9.2330473 20.628683 20.6226766 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m100.167286 504.518664c0-11.392534-9.233047-20.628684-20.6226763-20.628684s-20.6226766 9.23615-20.6226766 20.628684 9.2330473 20.628684 20.6226766 20.628684 20.6226763-9.23615 20.6226763-20.628684z"
          fill="#fd6234"
        />
        <path
          d="m812.656134 1014.4499c0 11.39254-9.23346 20.62869-20.622677 20.62869s-20.622676-9.23615-20.622676-20.62869c0-11.39253 9.233459-20.628682 20.622676-20.628682s20.622677 9.236152 20.622677 20.628682z"
          fill="#11cdef"
        />
        <path
          d="m791.656134 1074.4499c0 11.39254-9.23346 20.62869-20.622677 20.62869s-20.622676-9.23615-20.622676-20.62869c0-11.39253 9.233459-20.62868 20.622676-20.62868s20.622677 9.23615 20.622677 20.62868z"
          fill="#fd6234"
        />
        <path
          d="m719.436803 1010.8055c0 11.39254-9.23346 20.62868-20.622677 20.62868-11.389216 0-20.622676-9.23614-20.622676-20.62868 0-11.392533 9.23346-20.628683 20.622676-20.628683 11.389217 0 20.622677 9.23615 20.622677 20.628683z"
          fill="#fd6234"
        />
        <path
          d="m1081.21747 456.188605c-11.38921 0-20.62267-9.236149-20.62267-20.628684 0-11.392534 9.23346-20.628683 20.62267-20.628683 11.38922 0 20.62268 9.236149 20.62268 20.628683 0 11.392535-9.23346 20.628684-20.62268 20.628684z"
          fill="#11cdef"
        />
        <path
          d="m462.496817 194.519202c0 76.787635-62.229951 139.035714-138.995226 139.035714-11.400361 0-20.642855 9.245186-20.642855 20.648868s9.242494 20.648868 20.642855 20.648868c99.565996 0 180.280937-80.738451 180.280937-180.33345 0-11.403681-9.242495-20.648868-20.642855-20.648868-11.400361 0-20.642856 9.245187-20.642856 20.648868z"
          fill="#5e72e4"
        />
        <path
          d="m1141.90706 238.70334c0 11.392534-9.25026 20.628684-20.6602 20.628684h-174.923085c-11.409943 0-20.660206-9.23615-20.660206-20.628684s9.250263-20.628684 20.660206-20.628684h174.923085c11.40994 0 20.6602 9.23615 20.6602 20.628684z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m503.782528 194.499018c0-11.392535-9.23346-20.628684-20.622677-20.628684s-20.622676 9.236149-20.622676 20.628684c0 11.392534 9.233459 20.628683 20.622676 20.628683s20.622677-9.236149 20.622677-20.628683z"
          fill="#fd6234"
        />
        <path
          d="m1100.51352 194.350786c-8.05384 8.056188-21.11212 8.056188-29.16459 0-8.05384-8.056189-8.05384-21.118271 0-29.173085 8.05247-8.056188 21.11075-8.056188 29.16459 0 8.05384 8.054814 8.05384 21.116896 0 29.173085z"
          fill="#11cdef"
        />
        <path
          d="m960.279321 132.464584c-8.053843 8.05639-21.112122 8.05639-29.16459 0-8.053842-8.055977-8.053842-21.117115 0-29.173092 8.052468-8.0559775 21.110747-8.0559775 29.16459 0 8.053842 8.055977 8.053842 21.117115 0 29.173092z"
          fill="#11cdef"
        />
        <path
          d="m0 640.667976c0-11.392534 9.23308852-20.628683 20.6226766-20.628683h65.992565c11.3896293 0 20.6226764 9.236149 20.6226764 20.628683 0 11.392535-9.2330471 20.628684-20.6226764 20.628684h-65.992565c-11.38958808 0-20.6226766-9.236149-20.6226766-20.628684z"
          fill="#11cdef"
        />
        <path
          d="m656.390335 1195.28487c-11.389217 0-20.622677-9.21807-20.622677-20.58831v-59.01984c0-11.37024 9.23346-20.58831 20.622677-20.58831 11.389216 0 20.622676 9.21807 20.622676 20.58831v59.01984c0 11.37024-9.23346 20.58831-20.622676 20.58831z"
          fill="#5e72e4"
        />
        <path
          d="m755.379182 1178.78193c0-11.39254 9.242313-20.62869 20.642449-20.62869h163.763429c11.400137 0 20.642449 9.23615 20.642449 20.62869 0 11.39253-9.242312 20.62868-20.642449 20.62868h-163.763429c-11.400136 0-20.642449-9.23615-20.642449-20.62868z"
          fill="#2d374c"
        />
        <path
          d="m0 31.237721c0-11.3929469 9.23308947-20.6286837 20.6226774-20.6286837h94.8643116c11.389629 0 20.622676 9.2357368 20.622676 20.6286837 0 11.392947-9.233047 20.6286837-20.622676 20.6286837h-94.8643116c-11.38958793 0-20.6226774-9.2357367-20.6226774-20.6286837z"
          fill="#fd6234"
        />
        <path
          d="m945.107807 1199.41061c-11.389217 0-20.622677-9.23615-20.622677-20.62868 0-11.39254 9.23346-20.62869 20.622677-20.62869s20.622676 9.23615 20.622676 20.62869c0 11.39253-9.233459 20.62868-20.622676 20.62868z"
          fill="#fd6234"
        />
        <path
          d="m885.03981 141.389063c-34.874481 0-63.143593 28.278719-63.143593 63.161985 0 11.37465-9.218964 20.5963-20.590302 20.5963-11.37271 0-20.590302-9.22165-20.590302-20.5963 0-57.633938 46.707041-104.354584 104.324197-104.354584 11.371337 0 20.590302 9.221238 20.590302 20.596299 0 11.375062-9.218965 20.5963-20.590302 20.5963z"
          fill="#fd6234"
        />
        <path
          d="m786.755995 189.932122c8.052468-8.056189 21.110747-8.056189 29.16459 0 8.053842 8.056188 8.053842 21.116896 0 29.173084-8.053843 8.056189-21.112122 8.056189-29.16459 0-8.053842-8.056188-8.053842-21.116896 0-29.173084z"
          fill="#11cdef"
        />
        <path
          d="m1195.52602 793.320236c72.89291 0 131.98513-59.10943 131.98513-132.023576 0-11.392534 9.23346-20.628684 20.62268-20.628684s20.62268 9.23615 20.62268 20.628684c0 95.70059-77.55777 173.280943-173.23049 173.280943-11.38921 0-20.62267-9.236149-20.62267-20.628684 0-11.392534 9.23346-20.628683 20.62267-20.628683z"
          fill="#5e72e4"
        />
        <path
          d="m1362.71612 675.883202c-8.05384 8.056189-21.11212 8.056189-29.16459 0-8.05384-8.056188-8.05384-21.118271 0-29.173084 8.05247-8.056189 21.11075-8.056189 29.16459 0 8.05385 8.054813 8.05385 21.116896 0 29.173084z"
          fill="#11cdef"
        />
        <path
          d="m1421.04678 675.883202c-8.0566 8.056189-21.11763 8.056189-29.16047 0-8.05659-8.056188-8.05659-21.118271 0-29.173084 8.04284-8.056189 21.10387-8.056189 29.16047 0 8.05659 8.054813 8.05659 21.116896 0 29.173084z"
          fill="#11cdef"
        />
        <path
          d="m1559.04068 753.309009c-98.87504 0-179.02167 80.174102-179.02167 179.073814 0 11.411135-9.24853 20.662364-20.65634 20.662364-11.40782 0-20.65635-9.251229-20.65635-20.662364 0-121.723359 98.64094-220.39854 220.33436-220.39854 11.4023 0 20.65635 9.251229 20.65635 20.662363 0 11.411135-9.25405 20.662363-20.65635 20.662363z"
          fill="#2d374c"
        />
        <path
          d="m1141.90706 238.599507c.05748 11.392764-9.12805 20.67586-20.51887 20.732517-11.38945.05749-20.66846-9.130711-20.72648-20.524851-.05747-11.392765 9.12943-20.674485 20.51887-20.732517 11.38945-.05749 20.66984 9.132086 20.72648 20.524851z"
          fill="#fd6234"
        />
        <path
          d="m1330.45725 29.3653045c.05747 11.3928125-9.12805 20.6751725-20.51887 20.7329273-11.38945.0573533-20.66847-9.1316275-20.72648-20.52444-.05748-11.392675 9.12942-20.67503503 20.51887-20.73292736 11.38945-.05735328 20.66984 9.13176506 20.72648 20.52444006z"
          fill="#fd6234"
        />
        <path
          d="m1141.90706 31.1334774c.05748 11.3928125-9.12805 20.6751725-20.51887 20.7329273-11.38945.0573533-20.66846-9.1316276-20.72648-20.52444-.05747-11.392675 9.12943-20.675035 20.51887-20.7329274 11.38945-.0573532 20.66984 9.1317651 20.72648 20.5244401z"
          fill="#fd6234"
        />
        <path
          d="m1141.90706 85.9468369c.05748 11.3928125-9.12805 20.6751721-20.51887 20.7329271-11.38945.057354-20.66846-9.1316273-20.72648-20.5244398-.05747-11.392675 9.12943-20.675035 20.51887-20.7329273 11.38945-.0573533 20.66984 9.1317651 20.72648 20.52444z"
          fill="#fd6234"
        />
        <path
          d="m1548.45194 681.925344h-81.86857c-11.3928 0-20.63913-9.23615-20.63913-20.628684s9.24633-20.628684 20.63913-20.628684h81.86857c11.39281 0 20.63914 9.23615 20.63914 20.628684s-9.24633 20.628684-20.63914 20.628684z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m1579.69703 732.612967c0 11.392534-9.23896 20.628683-20.62268 20.628683s-20.62268-9.236149-20.62268-20.628683c0-11.392535 9.23896-20.628684 20.62268-20.628684s20.62268 9.236149 20.62268 20.628684z"
          fill="#fd6234"
        />
        <path
          d="m1343.95573 183.595285c0-19.012676-15.40863-34.42579-34.41577-34.42579s-34.41576 15.413114-34.41576 34.42579c0 19.012675 15.40862 34.42579 34.41576 34.42579 11.40401 0 20.64946 9.248145 20.64946 20.655474 0 11.40733-9.24545 20.655475-20.64946 20.655475-41.81653 0-75.71468-33.908027-75.71468-75.736739s33.89815-75.736739 75.71468-75.736739 75.71469 33.908027 75.71469 75.736739c0 11.40733-9.25096 20.655474-20.64946 20.655474-11.40401 0-20.64946-9.248144-20.64946-20.655474z"
          fill="#11cdef"
        />
        <path
          d="m1450.11086 41.3109484c-18.94786 0-34.30098 15.4129771-34.30098 34.4257903s15.35312 34.4257903 34.30098 34.4257903c11.36049 0 20.58059 9.247731 20.58059 20.655474 0 11.40733-9.2201 20.655474-20.58059 20.655474-41.68255 0-75.46216-33.908439-75.46216-75.7367383 0-41.8282992 33.77961-75.7367387 75.46216-75.7367387 11.36049 0 20.58059 9.24777251 20.58059 20.6554742 0 11.407743-9.2201 20.6554742-20.58059 20.6554742z"
          fill="#f5365c"
          fillRule="nonzero"
        />
        <path
          d="m1331.63569 238.70334c0 11.392534-9.23346 20.628684-20.62268 20.628684s-20.62268-9.23615-20.62268-20.628684 9.23346-20.628684 20.62268-20.628684 20.62268 9.23615 20.62268 20.628684z"
          fill="#fd6234"
        />
        <path
          d="m1471.86989 130.844794c0 11.392534-9.23896 20.628683-20.62268 20.628683s-20.62267-9.236149-20.62267-20.628683c0-11.392947 9.23895-20.628684 20.62267-20.628684s20.62268 9.235737 20.62268 20.628684z"
          fill="#11cdef"
        />
        <path
          d="m1387.0223 238.70334c0 11.392534-9.23895 20.628684-20.62267 20.628684-11.38922 0-20.62268-9.23615-20.62268-20.628684s9.23346-20.628684 20.62268-20.628684c11.38372 0 20.62267 9.23615 20.62267 20.628684z"
          fill="#11cdef"
        />
        <path
          d="m1441.8197 238.70334c0 11.392534-9.23896 20.628684-20.62267 20.628684-11.38372 0-20.62268-9.23615-20.62268-20.628684s9.23896-20.628684 20.62268-20.628684c11.38371 0 20.62267 9.23615 20.62267 20.628684z"
          fill="#11cdef"
        />
        <path
          d="m1473.63755 74.8526523c0 11.3929469-9.23896 20.6286837-20.62268 20.6286837s-20.62268-9.2357368-20.62268-20.6286837c0-11.392947 9.23896-20.6286837 20.62268-20.6286837s20.62268 9.2357367 20.62268 20.6286837z"
          fill="#fd6234"
        />
        <path
          d="m1528.43494 74.8526523c0 11.3929469-9.23895 20.6286837-20.62267 20.6286837s-20.62268-9.2357368-20.62268-20.6286837c0-11.392947 9.23896-20.6286837 20.62268-20.6286837s20.62267 9.2357367 20.62267 20.6286837z"
          fill="#fd6234"
        />
        <path
          d="m1583.82156 74.8526523c0 11.3929469-9.23896 20.6286837-20.62268 20.6286837-11.38371 0-20.62267-9.2357368-20.62267-20.6286837 0-11.392947 9.23896-20.6286837 20.62267-20.6286837 11.38372 0 20.62268 9.2357367 20.62268 20.6286837z"
          fill="#fd6234"
        />
        <path
          d="m1508.40149 442.632613c-11.38372 0-20.62268-9.236149-20.62268-20.628684 0-11.392534 9.23896-20.628683 20.62268-20.628683 11.38371 0 20.62267 9.236149 20.62267 20.628683 0 11.392535-9.23896 20.628684-20.62267 20.628684z"
          fill="#11cdef"
        />
      </g>
    </svg>
  );
}
