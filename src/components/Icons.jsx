import React from "react";

export const Icons = ({ icon, width, height, style, className, ...props }) => {
  switch (icon) {
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "11px"}
          height={height || "20px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 11 20"
          fill="none"
        >
          <path
            d="M7.31345 19.0918V10.8812H10.2081L10.6415 7.6813H7.31337V5.63833C7.31337 4.7119 7.58355 4.08058 8.97899 4.08058L10.7587 4.07979V1.21787C10.4509 1.17894 9.39435 1.0918 8.16537 1.0918C5.59935 1.0918 3.84261 2.58297 3.84261 5.32152V7.6813H0.940491V10.8812H3.84261V19.0917H7.31345V19.0918Z"
            fill="#4A3AFF"
          />
        </svg>
      );

    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "19px"}
          height={height || "16px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 19 16"
          fill="none"
        >
          <path
            d="M12.8767 0.793037V0.789795H13.7207L14.029 0.851387C14.2346 0.891373 14.4213 0.943775 14.589 1.00861C14.7567 1.07344 14.9191 1.14909 15.0759 1.23553C15.2328 1.32197 15.3751 1.41004 15.5028 1.49972C15.6294 1.58833 15.743 1.68234 15.8437 1.78175C15.9432 1.88224 16.0985 1.90818 16.3095 1.85955C16.5205 1.81092 16.7477 1.74338 16.9912 1.65694C17.2346 1.57051 17.4754 1.47325 17.7135 1.36519C17.9515 1.25713 18.0965 1.18852 18.1485 1.15935C18.1993 1.1291 18.2264 1.11289 18.2296 1.11072L18.2328 1.10586L18.2491 1.09775L18.2653 1.08965L18.2815 1.08155L18.2978 1.07344L18.301 1.06858L18.3059 1.06534L18.3108 1.0621L18.314 1.05723L18.3302 1.05237L18.3465 1.04913L18.3432 1.07344L18.3383 1.09775L18.3302 1.12207L18.3221 1.14638L18.314 1.16259L18.3059 1.1788L18.2978 1.20311C18.2924 1.21932 18.287 1.24092 18.2815 1.26794C18.2761 1.29496 18.2247 1.40301 18.1273 1.59211C18.03 1.78121 17.9082 1.97301 17.7621 2.16751C17.6161 2.36201 17.4851 2.50896 17.3694 2.60838C17.2525 2.70887 17.1751 2.7791 17.1373 2.81909C17.0994 2.86014 17.0534 2.89796 16.9993 2.93255L16.9181 2.98603L16.9019 2.99414L16.8857 3.00224L16.8824 3.00711L16.8776 3.01035L16.8727 3.01359L16.8694 3.01845L16.8532 3.02656L16.837 3.03466L16.8338 3.03952L16.8289 3.04276L16.824 3.04601L16.8208 3.05087L16.8175 3.05573L16.8126 3.05897L16.8078 3.06221L16.8045 3.06708H16.8857L17.3401 2.96983C17.6431 2.90499 17.9326 2.82666 18.2085 2.7348L18.6467 2.58893L18.6954 2.57272L18.7198 2.56462L18.736 2.55651L18.7522 2.54841L18.7685 2.5403L18.7847 2.5322L18.8171 2.52734L18.8496 2.52409V2.55651L18.8415 2.55975L18.8334 2.56462L18.8301 2.56948L18.8253 2.57272L18.8204 2.57596L18.8171 2.58082L18.8139 2.58569L18.809 2.58893L18.8042 2.59217L18.8009 2.59703L18.7977 2.60189L18.7928 2.60514L18.7847 2.62135L18.7766 2.63755L18.7717 2.6408C18.7695 2.64404 18.7008 2.73587 18.5656 2.91634C18.4303 3.09787 18.3573 3.18971 18.3465 3.19188C18.3356 3.19512 18.3205 3.21133 18.301 3.24051C18.2826 3.27075 18.1679 3.39124 17.9569 3.60195C17.7459 3.81266 17.5393 4.00013 17.3369 4.16439C17.1335 4.32971 17.0307 4.53285 17.0285 4.77382C17.0253 5.01371 17.0128 5.28494 16.9912 5.58748C16.9695 5.89005 16.929 6.21691 16.8694 6.56809C16.8099 6.91928 16.718 7.31639 16.5935 7.75941C16.4691 8.20244 16.3176 8.63466 16.1391 9.05608C15.9605 9.4775 15.7739 9.85569 15.5791 10.1907C15.3843 10.5257 15.2058 10.8093 15.0435 11.0416C14.8812 11.2739 14.7162 11.4927 14.5484 11.6981C14.3807 11.9034 14.1687 12.1346 13.9122 12.3918C13.6547 12.6479 13.514 12.7883 13.4902 12.8132C13.4653 12.837 13.3593 12.9256 13.1721 13.079C12.986 13.2335 12.7858 13.388 12.5715 13.5426C12.3584 13.696 12.1625 13.8241 11.984 13.9267C11.8054 14.0294 11.5901 14.1466 11.338 14.2784C11.087 14.4113 10.8153 14.5345 10.5232 14.648C10.231 14.7614 9.92265 14.8668 9.59803 14.964C9.27341 15.0613 8.95962 15.1369 8.65664 15.191C8.35368 15.245 8.01012 15.2909 7.62598 15.3287L7.04979 15.3855V15.3936H5.99479V15.3855L5.85682 15.3774C5.76486 15.372 5.68911 15.3666 5.62959 15.3612C5.57009 15.3558 5.34555 15.326 4.95601 15.272C4.56647 15.218 4.2608 15.1639 4.03897 15.1099C3.81716 15.0559 3.48712 14.9532 3.04889 14.802C2.61066 14.6507 2.23572 14.4978 1.92409 14.3433C1.61355 14.1898 1.41878 14.0926 1.33978 14.0515C1.26187 14.0115 1.17423 13.9618 1.07684 13.9024L0.930764 13.8133L0.927534 13.8084L0.922648 13.8051L0.917779 13.8019L0.914533 13.797L0.898302 13.7889L0.882071 13.7808L0.878841 13.776L0.873956 13.7727L0.869086 13.7695L0.86584 13.7646L0.86261 13.7598L0.857725 13.7565H0.849609V13.7241L0.86584 13.7273L0.882071 13.7322L0.95511 13.7403C1.0038 13.7457 1.13636 13.7538 1.35277 13.7646C1.56919 13.7754 1.79911 13.7754 2.04258 13.7646C2.28604 13.7538 2.53492 13.7295 2.78919 13.6917C3.04348 13.6539 3.34375 13.589 3.69001 13.4972C4.03627 13.4053 4.3544 13.2962 4.6444 13.1698C4.9333 13.0423 5.13888 12.9472 5.26117 12.8845C5.38235 12.8229 5.56738 12.7084 5.81625 12.5409L6.18956 12.2897L6.1928 12.2848L6.19767 12.2816L6.20256 12.2783L6.20579 12.2735L6.20903 12.2686L6.2139 12.2653L6.21879 12.2621L6.22202 12.2572L6.23825 12.2524L6.25448 12.2491L6.25772 12.2329L6.26259 12.2167L6.26748 12.2135L6.27071 12.2086L6.14086 12.2005C6.0543 12.1951 5.97044 12.1897 5.88928 12.1843C5.80813 12.1789 5.68099 12.1546 5.50786 12.1114C5.33474 12.0681 5.14809 12.0033 4.9479 11.9169C4.74772 11.8304 4.55295 11.7278 4.36359 11.6089C4.17424 11.4901 4.03735 11.3912 3.95295 11.3123C3.86963 11.2345 3.76142 11.1243 3.62833 10.9816C3.49632 10.8379 3.38162 10.6904 3.28424 10.5392C3.18685 10.3879 3.0938 10.2133 3.00508 10.0156L2.87035 9.72063L2.86223 9.69632L2.85412 9.672L2.84925 9.65579L2.846 9.63959L2.87035 9.64283L2.8947 9.64769L3.07323 9.672C3.19227 9.68821 3.37893 9.69361 3.6332 9.68821C3.88749 9.68281 4.06332 9.672 4.1607 9.65579C4.25809 9.63959 4.3176 9.62877 4.33924 9.62338L4.3717 9.61527L4.41228 9.60717L4.45286 9.59906L4.4561 9.5942L4.46097 9.59096L4.46586 9.58772L4.46909 9.58286L4.43662 9.57475L4.40416 9.56665L4.3717 9.55854L4.33924 9.55044L4.30678 9.54234C4.28514 9.53694 4.24728 9.52613 4.19316 9.50992C4.13906 9.49371 3.99299 9.43427 3.75493 9.33163C3.51689 9.22898 3.32752 9.12902 3.18685 9.03177C3.04583 8.93424 2.91137 8.82757 2.78433 8.71246C2.65772 8.59576 2.51869 8.44556 2.36719 8.26187C2.21571 8.07818 2.08046 7.86477 1.96142 7.62164C1.8424 7.37851 1.75313 7.1462 1.69361 6.92468C1.63433 6.70446 1.59522 6.47932 1.57677 6.25203L1.54754 5.91165L1.56377 5.91489L1.58 5.91976L1.59623 5.92786L1.61246 5.93596L1.62869 5.94407L1.64492 5.95217L1.8965 6.06563C2.06423 6.14128 2.27252 6.20611 2.52139 6.26013C2.77027 6.31416 2.91904 6.34388 2.96773 6.34928L3.04077 6.35738H3.18685L3.18362 6.35252L3.17873 6.34928L3.17387 6.34604L3.17062 6.34117L3.16739 6.33631L3.1625 6.33307L3.15763 6.32983L3.15439 6.32497L3.13816 6.31686L3.12193 6.30876L3.1187 6.3039L3.11381 6.30065L3.10894 6.29741L3.1057 6.29255L3.08947 6.28445L3.07323 6.27634L3.07 6.27148C3.06676 6.26931 3.02022 6.23473 2.9304 6.16774C2.84167 6.09967 2.74862 6.01161 2.65123 5.90355C2.55385 5.79549 2.45646 5.68203 2.35908 5.56317C2.26151 5.44404 2.17461 5.31659 2.09938 5.18227C2.02365 5.04721 1.94357 4.87538 1.85917 4.66685C1.77585 4.45938 1.71255 4.25029 1.66927 4.03958C1.626 3.82887 1.60165 3.62087 1.59623 3.41556C1.59082 3.21025 1.59623 3.03466 1.61246 2.88878C1.62869 2.74291 1.66115 2.57812 1.70984 2.39443C1.75854 2.21074 1.82888 2.01624 1.92084 1.81092L2.05881 1.50296L2.06692 1.47865L2.07504 1.45434L2.07992 1.4511L2.08315 1.44624L2.0864 1.44137L2.09127 1.43813L2.09615 1.44137L2.09938 1.44624L2.10263 1.4511L2.1075 1.45434L2.11238 1.45758L2.11561 1.46244L2.11886 1.46731L2.12373 1.47055L2.13185 1.48676L2.13996 1.50296L2.14485 1.50621L2.14808 1.51107L2.36719 1.7542C2.51327 1.91628 2.6864 2.09728 2.88658 2.29718C3.08677 2.49708 3.19768 2.60081 3.21931 2.60838C3.24096 2.61702 3.268 2.64187 3.30047 2.68294C3.33293 2.72292 3.44114 2.81855 3.62508 2.96983C3.80904 3.1211 4.0498 3.2967 4.34736 3.4966C4.64493 3.6965 4.97495 3.89371 5.33744 4.08821C5.69994 4.28271 6.08948 4.45829 6.50606 4.61498C6.92265 4.77167 7.21481 4.87431 7.38252 4.92294C7.55025 4.97156 7.83699 5.03369 8.24276 5.10934C8.64853 5.18498 8.95422 5.23361 9.1598 5.25521C9.36539 5.27682 9.50607 5.28925 9.5818 5.29249L9.69542 5.29573L9.69219 5.27142L9.6873 5.24711L9.65484 5.0445C9.6332 4.90944 9.62238 4.72033 9.62238 4.47721C9.62238 4.23408 9.64132 4.00987 9.67919 3.80456C9.71707 3.59925 9.77388 3.39124 9.84961 3.18054C9.92536 2.96983 9.99949 2.80071 10.072 2.67321C10.1456 2.54679 10.2419 2.40253 10.3609 2.24045C10.4799 2.07836 10.6341 1.91088 10.8235 1.73799C11.0128 1.56509 11.2292 1.41111 11.4727 1.27605C11.7162 1.14098 11.9407 1.03832 12.1463 0.968087C12.3519 0.897856 12.525 0.851922 12.6657 0.830316C12.8063 0.80871 12.8767 0.796278 12.8767 0.793037Z"
            fill="#4A3AFF"
          />
        </svg>
      );

    case "insta":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "19px"}
          height={height || "20px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.849609 10.0918C0.849609 6.49666 0.849609 4.69909 1.7063 3.40435C2.08886 2.82619 2.584 2.33104 3.16216 1.94849C4.4569 1.0918 6.25447 1.0918 9.84961 1.0918C13.4447 1.0918 15.2423 1.0918 16.5371 1.94849C17.1152 2.33104 17.6104 2.82619 17.9929 3.40435C18.8496 4.69909 18.8496 6.49666 18.8496 10.0918C18.8496 13.6869 18.8496 15.4845 17.9929 16.7792C17.6104 17.3574 17.1152 17.8526 16.5371 18.2351C15.2423 19.0918 13.4447 19.0918 9.84961 19.0918C6.25447 19.0918 4.4569 19.0918 3.16216 18.2351C2.584 17.8526 2.08886 17.3574 1.7063 16.7792C0.849609 15.4845 0.849609 13.6869 0.849609 10.0918ZM14.5089 10.092C14.5089 12.6653 12.4228 14.7514 9.84945 14.7514C7.27613 14.7514 5.19004 12.6653 5.19004 10.092C5.19004 7.5187 7.27613 5.43262 9.84945 5.43262C12.4228 5.43262 14.5089 7.5187 14.5089 10.092ZM9.84945 13.175C11.5521 13.175 12.9325 11.7947 12.9325 10.092C12.9325 8.38933 11.5521 7.00902 9.84945 7.00902C8.14675 7.00902 6.76645 8.38933 6.76645 10.092C6.76645 11.7947 8.14675 13.175 9.84945 13.175ZM14.6929 6.29335C15.2975 6.29335 15.7877 5.80318 15.7877 5.19852C15.7877 4.59387 15.2975 4.1037 14.6929 4.1037C14.0882 4.1037 13.5981 4.59387 13.5981 5.19852C13.5981 5.80318 14.0882 6.29335 14.6929 6.29335Z"
            fill="#4A3AFF"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "19px"}
          height={height || "19px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M0.84964 3.0116C0.84964 2.43439 1.05235 1.9582 1.45775 1.58303C1.86315 1.20785 2.39019 1.02026 3.03883 1.02026C3.6759 1.02026 4.19133 1.20496 4.58516 1.57438C4.99056 1.95533 5.19327 2.45171 5.19327 3.06355C5.19327 3.61767 4.99636 4.07941 4.60254 4.44883C4.19714 4.82979 3.66431 5.02026 3.00408 5.02026H2.98671C2.34963 5.02026 1.8342 4.82979 1.44037 4.44883C1.04655 4.06788 0.84964 3.5888 0.84964 3.0116ZM1.07551 18.1631V6.59602H4.93265V18.1631H1.07551ZM7.06972 18.1631H10.9269V11.7042C10.9269 11.3002 10.9732 10.9885 11.0659 10.7692C11.228 10.3767 11.4742 10.0448 11.8043 9.77351C12.1344 9.50222 12.5485 9.36658 13.0466 9.36658C14.3439 9.36658 14.9925 10.2381 14.9925 11.9813V18.1631H18.8496V11.5311C18.8496 9.82256 18.4442 8.52675 17.6334 7.64364C16.8226 6.76052 15.7512 6.31896 14.4191 6.31896C12.9249 6.31896 11.7608 6.95966 10.9269 8.24104V8.27567H10.9095L10.9269 8.24104V6.59602H7.06972C7.09288 6.96542 7.10447 8.11404 7.10447 10.0419C7.10447 11.9697 7.09288 14.6768 7.06972 18.1631Z"
            fill="#4A3AFF"
          />
        </svg>
      );

    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "21px"}
          height={height || "16px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 21 16"
          fill="none"
        >
          <path
            d="M11.2882 15.0717L7.22605 14.9958C5.9108 14.9693 4.59228 15.0222 3.30282 14.7481C1.34126 14.3386 1.20229 12.3307 1.05688 10.6464C0.856519 8.27857 0.934085 5.86776 1.31219 3.51968C1.52565 2.20217 2.36568 1.41599 3.66476 1.33044C8.05011 1.01997 12.4646 1.05676 16.8403 1.20161C17.3024 1.21489 17.7677 1.28747 18.2234 1.37008C20.4727 1.773 20.5275 4.04839 20.6733 5.96385C20.8187 7.89907 20.7573 9.84423 20.4794 11.7663C20.2564 13.3577 19.8298 14.6922 18.0294 14.8211C15.7737 14.9895 13.5697 15.1251 11.3076 15.082C11.3077 15.0717 11.2947 15.0717 11.2882 15.0717ZM8.90006 11.0427C10.6 10.0453 12.2674 9.06454 13.9576 8.07382C12.2545 7.07641 10.5902 6.09562 8.90006 5.1049V11.0427Z"
            fill="#4A3AFF"
          />
        </svg>
      );

    case "location":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "16px"}
          height={height || "19px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 16 19"
          fill="none"
        >
          <path
            d="M14.8608 8.35279C14.8608 13.7316 9.35164 17.0454 8.20675 17.6766C8.14333 17.7115 8.07208 17.7299 7.99964 17.7299C7.92721 17.7299 7.85596 17.7115 7.79254 17.6766C6.64679 17.0454 1.13931 13.7316 1.13931 8.35279C1.13931 4.06482 3.7121 1.06323 8.00007 1.06323C12.288 1.06323 14.8608 4.06482 14.8608 8.35279Z"
            stroke="#170F49"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.56973 7.92403C4.56973 8.83383 4.93115 9.70636 5.57447 10.3497C6.21779 10.993 7.09032 11.3544 8.00011 11.3544C8.90991 11.3544 9.78244 10.993 10.4258 10.3497C11.0691 9.70636 11.4305 8.83383 11.4305 7.92403C11.4305 7.01424 11.0691 6.14171 10.4258 5.49839C9.78244 4.85507 8.90991 4.49365 8.00011 4.49365C7.09032 4.49365 6.21779 4.85507 5.57447 5.49839C4.93115 6.14171 4.56973 7.01424 4.56973 7.92403V7.92403Z"
            stroke="#170F49"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "20px"}
          height={height || "19px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 20 19"
          fill="none"
        >
          <path
            d="M12.2516 17.0819L12.2607 17.0883C13.0477 17.5894 13.9822 17.807 14.9096 17.7052C15.8371 17.6033 16.7021 17.1881 17.3616 16.5281L17.9345 15.9551C18.0615 15.8282 18.1622 15.6776 18.231 15.5118C18.2997 15.3459 18.335 15.1682 18.335 14.9887C18.335 14.8092 18.2997 14.6314 18.231 14.4656C18.1622 14.2998 18.0615 14.1491 17.9345 14.0222L15.518 11.6075C15.3911 11.4805 15.2404 11.3798 15.0746 11.3111C14.9088 11.2424 14.731 11.207 14.5515 11.207C14.372 11.207 14.1943 11.2424 14.0285 11.3111C13.8626 11.3798 13.712 11.4805 13.5851 11.6075C13.3289 11.8636 12.9814 12.0075 12.6191 12.0075C12.2568 12.0075 11.9093 11.8636 11.6531 11.6075L7.78917 7.74264C7.53302 7.48641 7.38913 7.13895 7.38913 6.77665C7.38913 6.41435 7.53302 6.06688 7.78917 5.81066C7.91613 5.68377 8.01685 5.53311 8.08557 5.36729C8.15429 5.20146 8.18966 5.02372 8.18966 4.84421C8.18966 4.66471 8.15429 4.48697 8.08557 4.32115C8.01685 4.15532 7.91613 4.00466 7.78917 3.87777L5.37351 1.46303C5.11729 1.20688 4.76982 1.06299 4.40752 1.06299C4.04522 1.06299 3.69776 1.20688 3.44154 1.46303L2.86768 2.03597C2.20783 2.69561 1.79277 3.56063 1.69108 4.48809C1.58939 5.41555 1.80716 6.34995 2.3084 7.1369L2.31387 7.14601C4.96105 11.0626 8.33449 14.4354 12.2516 17.0819V17.0819Z"
            stroke="#170F49"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "20px"}
          height={height || "15px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 20 15"
          fill="none"
        >
          <path
            d="M18.3333 3.64624V11.9796C18.3333 12.5321 18.1138 13.062 17.7231 13.4527C17.3324 13.8434 16.8025 14.0629 16.25 14.0629H3.74999C3.19746 14.0629 2.66755 13.8434 2.27685 13.4527C1.88615 13.062 1.66666 12.5321 1.66666 11.9796V3.64624"
            stroke="#170F49"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3333 3.64632C18.3333 3.09379 18.1138 2.56388 17.7231 2.17318C17.3324 1.78248 16.8025 1.56299 16.25 1.56299H3.74999C3.19746 1.56299 2.66755 1.78248 2.27685 2.17318C1.88615 2.56388 1.66666 3.09379 1.66666 3.64632L8.89582 8.16021C9.22693 8.36715 9.60953 8.47688 9.99999 8.47688C10.3904 8.47688 10.773 8.36715 11.1042 8.16021L18.3333 3.64632Z"
            stroke="#170F49"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "banner-hash-big":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "269px"}
          height={height || "303px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 269 303"
          fill="none"
        >
          <path
            d="M203.641 96.7254L213.427 138.46L248.155 122.074L269.184 166.641L224.906 187.534L236.249 236.319L189.945 258.168L178.602 209.383L130.562 232.051L141.904 280.836L95.6002 302.685L84.2575 253.9L41.4262 274.111L20.3967 229.543L72.7781 204.826L62.9926 163.091L21.0295 182.892L0 138.324L51.2239 114.154L40.2745 66.9528L86.5786 45.104L97.528 92.305L145.568 69.6368L134.619 22.4358L180.923 0.586914L191.873 47.788L227.758 30.8551L248.788 75.4228L203.641 96.7254ZM157.337 118.574L109.297 141.242L119.082 182.977L167.123 160.309L157.337 118.574Z"
            fill="#F3F6FD"
            fill-opacity="0.2"
          />
        </svg>
      );

    case "banner-hash-small":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "90px"}
          height={height || "102px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 90 102"
          fill="none"
        >
          <path
            d="M68.0861 32.7288L71.3578 46.682L82.9689 41.2034L90 56.1037L75.1959 63.0888L78.9882 79.3989L63.5068 86.7036L59.7144 70.3935L43.6524 77.9721L47.4448 94.2822L31.9633 101.587L28.1709 85.2768L13.8506 92.0337L6.81949 77.1334L24.3329 68.87L21.0612 54.9168L7.03108 61.5367L0 46.6364L17.1264 38.5556L13.4655 22.7749L28.947 15.4702L32.6078 31.2509L48.6698 23.6723L45.009 7.89161L60.4904 0.586914L64.1513 16.3676L76.1494 10.7064L83.1805 25.6067L68.0861 32.7288ZM52.6046 40.0335L36.5426 47.6121L39.8144 61.5653L55.8764 53.9867L52.6046 40.0335Z"
            fill="#F3F6FD"
            fill-opacity="0.2"
          />
        </svg>
      );

    case "price-check":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "24px"}
          height={height || "25px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.25 12.3367C2.25 6.95167 6.615 2.58667 12 2.58667C17.385 2.58667 21.75 6.95167 21.75 12.3367C21.75 17.7217 17.385 22.0867 12 22.0867C6.615 22.0867 2.25 17.7217 2.25 12.3367ZM15.61 10.5227C15.67 10.4427 15.7134 10.3516 15.7377 10.2546C15.762 10.1577 15.7666 10.0568 15.7514 9.95802C15.7361 9.85924 15.7012 9.76449 15.6489 9.67937C15.5965 9.59424 15.5276 9.52045 15.4463 9.46232C15.3649 9.4042 15.2728 9.36291 15.1753 9.3409C15.0778 9.31888 14.9769 9.31658 14.8785 9.33413C14.7801 9.35168 14.6862 9.38872 14.6023 9.44308C14.5184 9.49744 14.4462 9.56802 14.39 9.65067L11.154 14.1807L9.53 12.5567C9.38783 12.4242 9.19978 12.3521 9.00548 12.3555C8.81118 12.3589 8.62579 12.4376 8.48838 12.575C8.35097 12.7125 8.27225 12.8978 8.26882 13.0921C8.2654 13.2864 8.33752 13.4745 8.47 13.6167L10.72 15.8667C10.797 15.9436 10.8898 16.0029 10.992 16.0403C11.0942 16.0778 11.2033 16.0925 11.3118 16.0836C11.4202 16.0747 11.5255 16.0422 11.6201 15.9885C11.7148 15.9348 11.7967 15.8612 11.86 15.7727L15.61 10.5227Z"
            fill="#343846"
          />
        </svg>
      );

    case "faq-add":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "24px"}
          height={height || "24px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 4V20M20 12H4"
            stroke="#8A8A8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "faq-minus":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "24px"}
          height={height || "24px"}
          className={className}
          style={style}
          {...props}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 12H4"
            stroke="#8A8A8A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};
