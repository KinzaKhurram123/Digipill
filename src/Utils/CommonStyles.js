import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS, FONTS, SIZES } from "../Components/Constant";

export default CommonStyles = {
  fieldTitle: {
    color: COLORS.WHITE,
    ...FONTS.Regular14,
    paddingLeft: SIZES.base,
    paddingBottom: SIZES.base,
  },
  text: {
    color: COLORS.PRIMARY,
    ...FONTS.Regular17,
  },
  title: {
    color: COLORS.white,
    ...FONTS.Regular30,
    paddingBottom: hp("3"),
  },
  cardTitle: {
    color: COLORS.PRIMARY,
    ...FONTS.Bold15,
  },
};
