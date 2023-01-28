// Данные взяты из: https://ru.wikipedia.org/wiki/Население_субъектов_Российской_Федерации
var cityData = {
    "RU-BA": {"population": 4063293, "percent": 2.77},
    "RU-TA": {"population": 3894284, "percent": 2.65},
    "RU-DA": {"population": 3063885, "percent": 2.09},
    "RU-UD": {"population": 1513044, "percent": 1.03},
    "RU-CE": {"population": 1436981, "percent": 0.98},
    "RU-CU": {"population": 1231117, "percent": 0.84},
    "RU-BU": {"population": 984511, "percent": 0.67},
    "RU-SA": {"population": 964330, "percent": 0.66},
    "RU-KB": {"population": 865828, "percent": 0.59},
    "RU-MO": {"population": 805056, "percent": 0.55},
    "RU-SE": {"population": 701765, "percent": 0.48},
    "RU-ME": {"population": 682333, "percent": 0.46},
    "RU-KK": {"population": 537513, "percent": 0.37},
    "RU-IN": {"population": 488043, "percent": 0.33},
    "RU-KC": {"population": 466305, "percent": 0.32},
    "RU-AD": {"population": 453376, "percent": 0.31},
    "RU-TY": {"population": 321722, "percent": 0.22},
    "RU-KL": {"population": 275413, "percent": 0.19},
    "RU-ALT": {"population": 2350080, "percent": 1.6},
    "RU-AMU": {"population": 798424, "percent": 0.54},
    "RU-ARK": {"population": 1111031, "percent": 0.76},
    "RU-AST": {"population": 1017514, "percent": 0.69},
    "RU-BEL": {"population": 1549876, "percent": 1.06},
    "RU-BRY": {"population": 1210982, "percent": 0.82},
    "RU-VLA": {"population": 1378337, "percent": 0.94},
    "RU-VGG": {"population": 2521276, "percent": 1.72},
    "RU-VLG": {"population": 1176689, "percent": 0.8},
    "RU-VOR": {"population": 2333768, "percent": 1.59},
    "RU-YEV": {"population": 162014, "percent": 0.11},
    "RU-ZAB": {"population": 1072806, "percent": 0.73},
    "RU-IVA": {"population": 1014646, "percent": 0.69},
    "RU-IRK": {"population": 2404195, "percent": 1.64},
    "RU-KGD": {"population": 994599, "percent": 0.68},
    "RU-KLU": {"population": 1012156, "percent": 0.69},
    "RU-KAM": {"population": 315557, "percent": 0.21},
    "RU-KEM": {"population": 2694877, "percent": 1.83},
    "RU-KIR": {"population": 1283238, "percent": 0.87},
    "RU-KOS": {"population": 643324, "percent": 0.44},
    "RU-KDA": {"population": 5603420, "percent": 3.81},
    "RU-KYA": {"population": 2876497, "percent": 1.96},
    "RU-KGN": {"population": 845537, "percent": 0.58},
    "RU-KRS": {"population": 1115237, "percent": 0.76},
    "RU-LEN": {"population": 1813816, "percent": 1.23},
    "RU-LIP": {"population": 1150201, "percent": 0.78},
    "RU-MAG": {"population": 144091, "percent": 0.1},
    "RU-MOS": {"population": 7503385, "percent": 5.11},
    "RU-MUR": {"population": 753557, "percent": 0.51},
    "RU-NIZ": {"population": 3234752, "percent": 2.2},
    "RU-NGR": {"population": 606476, "percent": 0.41},
    "RU-NVS": {"population": 2788849, "percent": 1.9},
    "RU-OMS": {"population": 1960081, "percent": 1.33},
    "RU-ORE": {"population": 1977720, "percent": 1.35},
    "RU-ORL": {"population": 747247, "percent": 0.51},
    "RU-PNZ": {"population": 1331655, "percent": 0.91},
    "RU-PER": {"population": 2623122, "percent": 1.79},
    "RU-PRI": {"population": 1913037, "percent": 1.3},
    "RU-PSK": {"population": 636546, "percent": 0.43},
    "RU-AL": {"population": 218063, "percent": 0.15},
    "RU-KR": {"population": 622484, "percent": 0.42},
    "RU-KO": {"population": 840873, "percent": 0.57},
    "RU-ROS": {"population": 4220452, "percent": 2.87},
    "RU-RYA": {"population": 1121474, "percent": 0.76},
    "RU-SAM": {"population": 3193514, "percent": 2.17},
    "RU-SAR": {"population": 2462950, "percent": 1.68},
    "RU-SAK": {"population": 490181, "percent": 0.33},
    "RU-SVE": {"population": 4325256, "percent": 2.94},
    "RU-SMO": {"population": 949348, "percent": 0.65},
    "RU-STA": {"population": 2800674, "percent": 1.91},
    "RU-TAM": {"population": 1033552, "percent": 0.7},
    "RU-TVE": {"population": 1283873, "percent": 0.87},
    "RU-TOM": {"population": 1078280, "percent": 0.73},
    "RU-TUL": {"population": 1491855, "percent": 1.02},
    "RU-TYU": {"population": 1498779, "percent": 1.02},
    "RU-ULY": {"population": 1246618, "percent": 0.85},
    "RU-KHA": {"population": 1328302, "percent": 0.9},
    "RU-CHE": {"population": 3493036, "percent": 2.38},
    "RU-CHU": {"population": 49348, "percent": 0.03},
    "RU-YAR": {"population": 1265684, "percent": 0.86},
    "RU-SPE": {"population": 5351935, "percent": 3.64},
    "RU-MOW": {"population": 12506468, "percent": 8.51},
    "RU-NEN": {"population": 43997, "percent": 0.03},
    "RU-KHM": {"population": 1655074, "percent": 1.13},
    "RU-YAN": {"population": 538547, "percent": 0.37},
    "RU-SEV": {"population": 436670, "percent": 0.3},
    "RU-KRY": {"population": 1913731, "percent": 1.3}
};