# Plate Reader 2 Data Viewer

The intent of this app is to make the analysis of Electrochemiluminescence(ECL) Assay results far easier than the provided provided software. Currently the software outputs a raw text file in which lab operators can conduct manual factoring or use existing tools such as an excel workbook or VisualBasic App.

These assays can detect the presence of target antigens by using Electrochemiluminescent labels which generate light when stimulated with electricity in the appropriate chemical environment. The Plate Reader 2 allows the user to read the light produced by these reactions and measure the presence of target antigens.

#### Currently the operators use the 96 Multi-Spot 9 Assays Which have spots for:

- Botulinum Toxin (BOT)
- Ricin (RIC)
- Staphylococcal enterotoxin B (SEB)
- Positive Control - High (PC-H)
- Positive Control - Low (PC-L)

### The operator conducts the sample prep and loads each of the wells with a specific dilution of the sample, and various controls.

These wells can and usually include (run in duplicate):

- 1:1, 1:2, 1:10, 10:100, and 1:1000 dilutions
- Matrix Controls (Tests if the sample matrix is inhibiting the results)
- Inhibition Controls (Tests if the test results are being inhibited by the sample)
- Positive Controls (Tests if the target spots return positive for target analyte )
- Negative Controls (Ensures no false positives are present, also helps calculate threshold values for positive results)

### Current Goals

1. Add Text file upload
2. Parse text file into usable data
3. Conduct Custom Analysis and use Custom non-standard plate layouts.
