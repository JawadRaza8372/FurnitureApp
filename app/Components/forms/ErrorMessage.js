import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {       color: "#ff9e9e",
  textAlign: "center",
  fontSize: 12, },
});

export default ErrorMessage;
