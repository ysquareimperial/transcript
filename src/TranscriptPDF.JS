import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
const BORDER_COLOR = "#000";
const BORDER_STYLE = "solid";
const COL1_WIDTH = 9.99;
const COL2_WIDTH = 38;
const COL3_WIDTH = 10;
const COLN_WIDTH = (100 - COL2_WIDTH - COL3_WIDTH) / 3;
const styles = StyleSheet.create({

    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald',
        color: "blue",
        fontWeight: "bold"

    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginTop: "10px"
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
    },
    tableCol1Header: {
        width: COL1_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCol2Header: {
        width: COL2_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCol3Header: {
        width: COL3_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColHeader: {
        width: COLN_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCol1: {
        width: COL1_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCol2: {
        width: COL2_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderRadius: 2,
        paddingBottom: 8,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCol3: {
        width: COL3_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderRadius: 2,
        paddingBottom: 8,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCol: {
        width: COLN_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCellHeader: {
        margin: 5,
        fontSize: 12,
        fontWeight: "bold",
    },
    tableCell: {
        margin: 5,
        fontSize: 10,
    },
    tableCell1: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 10,
    },
    line: {
        borderBottom: "2px solid black"

    },
    lex: {
        display: "flex",
        justifyContent: "space-around",
    },
    stud: {
        textAlign: "center",
        color: "red",
        fontSize: "14"
    },

    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10,
        color: "green"
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },

    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

const TranscriptPDF = () => {
    return (
        <>
            <Document>
                <Page style={styles.body}>

                    <Text style={styles.title}>UNITY COLLEGE OF EDUCATION KANO STATE</Text>
                    <Text style={styles.author}>Accredited NCE awarding College in Nigeria</Text>
                    <Text style={styles.line}></Text>
                    <Text style={styles.stud}>student's transcript</Text>
                    <Text style={styles.line}></Text>
                    <View style={styles.lex}>

                        <View style={{marginTop:20}}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <View style={{ width: "50%" }}>
                                    <Text style={{ fontSize: '14px' }}>Name:

                                        <Text style={{ fontSize: "12px", marginLeft: 25 }}>Abdulsalam</Text>
                                    </Text>
                                </View>
                                <View style={{ width: "50%" }}>
                                    <Text style={{fontSize:'14px'}}>Admission No:
                                    <Text style={{ fontSize: "12px" }}>master class</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: "10px" }}>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <View style={{ width: "50%" }}>
                                    <Text style={{fontSize:'14px'}}>Combination:
                                        <Text style={{ fontSize: "12px" }}>Abdulsalam</Text>
                                    </Text>
                                </View>
                                <View style={{ width: "50%" }}>
                                    <Text style={{fontSize:'14px'}}>Semester:

                                    <Text style={{ fontSize: "12px" }}>master class</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>



                    </View>
                    <Text style={styles.line}></Text>

                    <View style={styles.table}>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCol3Header}>
                                <Text style={[styles.tableCellHeader, { textAlign: "center" }]}>
                                    CODE
                                </Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={[styles.tableCellHeader, { textAlign: "center" }]}>
                                    TITLE
                                </Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={[styles.tableCellHeader, { textAlign: "center" }]}>
                                    MARKS
                                </Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={[styles.tableCellHeader, { textAlign: "center" }]}>
                                    POINTS
                                </Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={[styles.tableCellHeader, { textAlign: "center" }]}>
                                    POINTS
                                </Text>
                            </View>
                        </View>

                        <View style={styles.tableRow} >
                            <View style={styles.tableCol3}>
                                <Text style={[styles.tableCell, { textAlign: "center" }]}>
                                    EDU 111
                                </Text>
                            </View>
                            <View style={styles.tableCol2}>
                                <Text style={styles.tableCell}>History of Education in Nigeria</Text>
                            </View>

                            <View style={styles.tableCol}>
                                <Text style={[styles.tableCell, { textAlign: "center" }]}>
                                    1bncbnfn
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={[styles.tableCell, { textAlign: "right" }]}>
                                    2bhkjnb b
                                </Text>
                            </View>

                            <View style={styles.tableCol}>
                                <Text style={[styles.tableCell, { textAlign: "right" }]}>
                                    jkkjjjkjkjkjk
                                </Text>
                            </View>
                            {/* <View style={styles.tableCol}>
<Text style={styles.tableCell}>{item.location_from}</Text>
</View> */}
                        </View>


                    </View>

                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: "50" }}>
                            <View style={{ width: "50%" }}>
                                <Text>________________</Text>
                                <Text style={{ fontSize: "12px" }}>Central Examinations Officer	</Text>
                            </View>
                            <View style={{ width: "50%" }}>
                                <Text>____________</Text>
                                <Text style={{ fontSize: "12px" }}>Center Coordinator</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: "10" }}>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                            <View style={{ width: "50%" }}>
                                <Text>_____________</Text>
                                <Text style={{ fontSize: "12px" }}>Director of Studies </Text>
                            </View>

                        </View>
                    </View>
                    <Text>


                        <Text></Text>
                    </Text>
                    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            </Document>
        </>
    )
}
export default TranscriptPDF;

