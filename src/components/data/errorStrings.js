const errorStrings= {
    //GET
   spendingGetConnectionError: "No connection estabilished with database. Spendings are not loaded.",
   spendingGet500Error: "There was a problem when downloading spendings.",
   spendingGetUnknowError: "Unknown error happened. Spendings are not loaded.",

   //POST
   spendingPostConnectionError: "No connection estabilished with database. Spending will not be added.",
   spendingPost500Error: "There was a problem when adding spending. Spending will not be added.",
   spendingPostUnknownError:  "Unknown error happened. Spending will not be added."          
};

export {errorStrings};