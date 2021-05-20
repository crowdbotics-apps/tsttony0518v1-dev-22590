import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_2_22}>
        <View style={styles.View_2_23}>
          <Text style={styles.Text_2_23}>🗒 Terms &amp; conditions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_2_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_2_25}
        />
      </View>
      <View style={styles.View_2_26}>
        <View style={styles.View_2_27}>
          <Text style={styles.Text_2_27}>📖 Privacy policy</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_2_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_2_29}
        />
      </View>
      <View style={styles.View_2_30}>
        <View style={styles.View_2_31}>
          <Text style={styles.Text_2_31}>💬 Feedback</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_2_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_2_33}
        />
      </View>
      <View style={styles.View_2_34}>
        <View style={styles.View_2_35}>
          <Text style={styles.Text_2_35}>🌍 Form Web view</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d825/996c/20e00aad463506390a6fccbeb075ebf7"
          }}
          style={styles.ImageBackground_2_36}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
          }}
          style={styles.ImageBackground_2_37}
        />
      </View>
      <View style={styles.View_2_38}>
        <View style={styles.View_2_39}>
          <Text style={styles.Text_2_39}>Settings</Text>
        </View>
      </View>
      <View style={styles.View_2_65}>
        <View style={styles.View_2_67}>
          <View style={styles.View_2_68}>
            <Text style={styles.Text_2_68}>👏 Made with CB</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d15/834c/8f669f3579391faf07ae7ee45338f35b"
            }}
            style={styles.ImageBackground_2_69}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_2_22: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_23: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.3224043715846996%")
  },
  Text_2_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_24: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.274985308204194%")
  },
  ImageBackground_2_25: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.20218579234973%")
  },
  View_2_26: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.51366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_27: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_2_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_28: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.001761264488351%")
  },
  ImageBackground_2_29: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.20218579234973%")
  },
  View_2_30: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.26229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_31: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_2_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_32: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.001761264488351%")
  },
  ImageBackground_2_33: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.202185792349724%")
  },
  View_2_34: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.01092896174863%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_35: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_2_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_36: {
    width: wp("4.561760457356771%"),
    minWidth: wp("4.561760457356771%"),
    height: hp("2.3369674474163786%"),
    minHeight: hp("2.3369674474163786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.758984375%"),
    top: hp("4.001761264488344%")
  },
  ImageBackground_2_37: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.202185792349724%")
  },
  View_2_38: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.62841530054645%"),
    minHeight: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_2_39: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("11.748633879781421%")
  },
  Text_2_39: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_65: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("43.30601092896175%"),
    minHeight: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_67: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_68: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.322404371584696%")
  },
  Text_2_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_69: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("11.20218579234971%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
