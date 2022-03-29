class Developer {

    constructor(object) {
      this.name = object.name;
      this.language = object.language;
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }

    getLanguage(){
        return this.language
    } 
    
    setLanguage(language){
        this.language = language
    }

    code(){
        var aLang = ['nodejs', 'java', 'python']

        return new Promise((resolve, reject) => {
            if (this.name === 'Nicole' && this.language === 'nodejs')
                resolve('console.log("Hello, Nicole!")')
            else if (this.name === 'John' && this.language === 'java')
                resolve('System.out.println("Hello, John!")')
            else if (this.name === 'Pete' && this.language === 'python')
                resolve('print("Hello, Pete!")')
            else if (!aLang.includes(this.language))
                reject(new Error(`Unsupported language: ${this.language}`))
        }).then(function(success){
            return success
        }, function(error){
            return error.message
        })
    }
  }

  module.exports = Developer