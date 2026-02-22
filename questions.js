const questions = [

{question:"What does a z-score represent?",
answers:[
{text:"Distance from the mean measured in standard deviations", correct:true},
{text:"The sample size", correct:false},
{text:"The median value", correct:false},
{text:"The variance", correct:false}
]},

{question:"Which graph is best for quantitative data distribution?",
answers:[
{text:"Histogram", correct:true},
{text:"Pie chart", correct:false},
{text:"Bar chart", correct:false},
{text:"Mosaic plot", correct:false}
]},

{question:"A distribution is symmetric if:",
answers:[
{text:"Left and right sides mirror each other", correct:true},
{text:"Mean equals zero", correct:false},
{text:"All values are equal", correct:false},
{text:"There are no outliers", correct:false}
]},

{question:"An outlier is:",
answers:[
{text:"A value far from the rest of the data", correct:true},
{text:"The largest value", correct:false},
{text:"The average value", correct:false},
{text:"Any negative number", correct:false}
]},

{question:"The median is resistant because it:",
answers:[
{text:"Is not strongly affected by extreme values", correct:true},
{text:"Uses all observations equally", correct:false},
{text:"Is always largest", correct:false},
{text:"Requires symmetry", correct:false}
]},

{question:"Standard deviation measures:",
answers:[
{text:"Spread around the mean", correct:true},
{text:"Center of data", correct:false},
{text:"Sample size", correct:false},
{text:"Probability", correct:false}
]},

{question:"A Normal distribution is:",
answers:[
{text:"Bell-shaped and symmetric", correct:true},
{text:"Always skewed", correct:false},
{text:"Flat", correct:false},
{text:"Discrete only", correct:false}
]},

{question:"About 68% of data in a Normal model lie within:",
answers:[
{text:"1 standard deviation", correct:true},
{text:"2 standard deviations", correct:false},
{text:"3 standard deviations", correct:false},
{text:"Half a deviation", correct:false}
]},

{question:"The correlation coefficient measures:",
answers:[
{text:"Strength and direction of a linear relationship", correct:true},
{text:"Slope only", correct:false},
{text:"Spread only", correct:false},
{text:"Sample size", correct:false}
]},

{question:"Correlation values range between:",
answers:[
{text:"-1 and 1", correct:true},
{text:"0 and 100", correct:false},
{text:"-10 and 10", correct:false},
{text:"0 and 1 only", correct:false}
]},

{question:"A scatterplot displays:",
answers:[
{text:"Relationship between two quantitative variables", correct:true},
{text:"Categorical counts", correct:false},
{text:"One variable only", correct:false},
{text:"Percentages only", correct:false}
]},

{question:"Positive correlation means:",
answers:[
{text:"Variables increase together", correct:true},
{text:"Variables decrease randomly", correct:false},
{text:"No relationship", correct:false},
{text:"Curved pattern", correct:false}
]},

{question:"Negative correlation means:",
answers:[
{text:"One variable increases while the other decreases", correct:true},
{text:"Both increase", correct:false},
{text:"No relationship", correct:false},
{text:"Perfect prediction", correct:false}
]},

{question:"An explanatory variable is:",
answers:[
{text:"The predictor variable", correct:true},
{text:"Always categorical", correct:false},
{text:"The response outcome", correct:false},
{text:"The average", correct:false}
]},

{question:"The response variable is:",
answers:[
{text:"The outcome being predicted", correct:true},
{text:"Always time", correct:false},
{text:"The sample size", correct:false},
{text:"The median", correct:false}
]},

{question:"A lurking variable:",
answers:[
{text:"Influences both variables unnoticed", correct:true},
{text:"Is always measured", correct:false},
{text:"Is the response", correct:false},
{text:"Is random noise only", correct:false}
]},

{question:"Random sampling helps reduce:",
answers:[
{text:"Bias", correct:true},
{text:"Sample size", correct:false},
{text:"Variation entirely", correct:false},
{text:"Measurement units", correct:false}
]},

{question:"Bias occurs when:",
answers:[
{text:"Sample systematically misrepresents population", correct:true},
{text:"Sample is large", correct:false},
{text:"Data are numeric", correct:false},
{text:"Mean equals median", correct:false}
]},

{question:"Voluntary response samples often:",
answers:[
{text:"Overrepresent strong opinions", correct:true},
{text:"Are random", correct:false},
{text:"Guarantee accuracy", correct:false},
{text:"Eliminate bias", correct:false}
]},

{question:"A parameter describes:",
answers:[
{text:"A population", correct:true},
{text:"A sample", correct:false},
{text:"A graph", correct:false},
{text:"An experiment only", correct:false}
]},

{question:"A statistic describes:",
answers:[
{text:"A sample", correct:true},
{text:"A population", correct:false},
{text:"Probability rule", correct:false},
{text:"Bias level", correct:false}
]},

{question:"The mean is sensitive to:",
answers:[
{text:"Outliers", correct:true},
{text:"Sample labels", correct:false},
{text:"Units only", correct:false},
{text:"Category names", correct:false}
]},

{question:"Right-skewed distributions have:",
answers:[
{text:"Long right tail", correct:true},
{text:"Equal tails", correct:false},
{text:"No mean", correct:false},
{text:"Only negative values", correct:false}
]},

{question:"Left-skewed distributions have:",
answers:[
{text:"Long left tail", correct:true},
{text:"Perfect symmetry", correct:false},
{text:"No median", correct:false},
{text:"Only positives", correct:false}
]},

{question:"The interquartile range equals:",
answers:[
{text:"Q3 minus Q1", correct:true},
{text:"Max minus min", correct:false},
{text:"Mean minus median", correct:false},
{text:"Variance", correct:false}
]},

{question:"Boxplots display:",
answers:[
{text:"Five-number summary", correct:true},
{text:"Correlation", correct:false},
{text:"Regression slope", correct:false},
{text:"Probability rules", correct:false}
]},

{question:"Probability must be between:",
answers:[
{text:"0 and 1", correct:true},
{text:"-1 and 1", correct:false},
{text:"0 and 100", correct:false},
{text:"Any number", correct:false}
]},

{question:"Independent events mean:",
answers:[
{text:"One event does not affect another", correct:true},
{text:"They occur together", correct:false},
{text:"They are equal", correct:false},
{text:"Probability is zero", correct:false}
]},

{question:"Disjoint events:",
answers:[
{text:"Cannot occur simultaneously", correct:true},
{text:"Always independent", correct:false},
{text:"Always likely", correct:false},
{text:"Have equal probability", correct:false}
]},

{question:"A linear relationship appears as:",
answers:[
{text:"A straight-line pattern", correct:true},
{text:"Random cloud", correct:false},
{text:"Circle pattern", correct:false},
{text:"Histogram shape", correct:false}
]},

{question:"Regression predicts:",
answers:[
{text:"Response variable values", correct:true},
{text:"Sample size", correct:false},
{text:"Median only", correct:false},
{text:"Probability alone", correct:false}
]},

{question:"Slope represents:",
answers:[
{text:"Change in response per unit change in explanatory", correct:true},
{text:"Correlation strength", correct:false},
{text:"Spread", correct:false},
{text:"Mean difference only", correct:false}
]},

{question:"Residual equals:",
answers:[
{text:"Observed minus predicted value", correct:true},
{text:"Mean minus median", correct:false},
{text:"Slope minus intercept", correct:false},
{text:"Probability error", correct:false}
]},

{question:"A good residual plot shows:",
answers:[
{text:"Random scatter", correct:true},
{text:"Clear curve", correct:false},
{text:"Strong pattern", correct:false},
{text:"Straight line", correct:false}
]},

{question:"Extrapolation means:",
answers:[
{text:"Predicting outside observed data range", correct:true},
{text:"Random sampling", correct:false},
{text:"Finding mean", correct:false},
{text:"Removing outliers", correct:false}
]},

{question:"Standard deviation increases when:",
answers:[
{text:"Data become more spread out", correct:true},
{text:"Mean increases only", correct:false},
{text:"Sample shrinks", correct:false},
{text:"Median changes", correct:false}
]},

{question:"Center of symmetric distribution:",
answers:[
{text:"Mean ≈ Median", correct:true},
{text:"Mean is zero", correct:false},
{text:"Median disappears", correct:false},
{text:"No spread", correct:false}
]},

{question:"A Normal probability plot checks:",
answers:[
{text:"If data follow a Normal distribution", correct:true},
{text:"Sample size", correct:false},
{text:"Correlation", correct:false},
{text:"Bias", correct:false}
]},

{question:"Data are approximately Normal when plot is:",
answers:[
{text:"Roughly straight", correct:true},
{text:"Curved", correct:false},
{text:"Horizontal", correct:false},
{text:"Random dots", correct:false}
]},

{question:"An influential point:",
answers:[
{text:"Strongly changes regression results", correct:true},
{text:"Is always an outlier", correct:false},
{text:"Must be removed", correct:false},
{text:"Equals the mean", correct:false}
]},

{question:"r = 0 indicates:",
answers:[
{text:"No linear relationship", correct:true},
{text:"Perfect negative relationship", correct:false},
{text:"Strong positive pattern", correct:false},
{text:"Causation", correct:false}
]},

{question:"Correlation does NOT imply:",
answers:[
{text:"Causation", correct:true},
{text:"Association", correct:false},
{text:"Linear trend", correct:false},
{text:"Data relationship", correct:false}
]},

{question:"Sampling variability refers to:",
answers:[
{text:"Natural differences between samples", correct:true},
{text:"Bias", correct:false},
{text:"Measurement error only", correct:false},
{text:"Outliers only", correct:false}
]},

{question:"A census collects data from:",
answers:[
{text:"Entire population", correct:true},
{text:"Random sample only", correct:false},
{text:"Volunteers", correct:false},
{text:"One subgroup", correct:false}
]},

{question:"Random assignment is used in:",
answers:[
{text:"Experiments", correct:true},
{text:"Surveys only", correct:false},
{text:"Observational studies", correct:false},
{text:"Histograms", correct:false}
]},

{question:"Observational studies:",
answers:[
{text:"Observe without imposing treatments", correct:true},
{text:"Control variables completely", correct:false},
{text:"Prove causation", correct:false},
{text:"Use random assignment always", correct:false}
]},

{question:"The shape, center, spread framework describes:",
answers:[
{text:"Distributions", correct:true},
{text:"Regression lines", correct:false},
{text:"Probability rules", correct:false},
{text:"Sampling bias", correct:false}
]},

{question:"Bivariate data involve:",
answers:[
{text:"Two variables measured together", correct:true},
{text:"One variable only", correct:false},
{text:"Categories only", correct:false},
{text:"Population counts", correct:false}
]}

];

