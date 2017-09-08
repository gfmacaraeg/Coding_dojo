class BankAccount
  attr_reader :account_number, :checking, :saving
  @@bank_accounts = 0

  def initialize
    @account_number = acctNumber
    @checking = 0
    @saving = 0
    @@bank_accounts += 1
    @interest_rate = 0.01
  end

  def deposit(amount, acct_type)
    if type == 'saving' && amount === Number
      @saving += amount
    elsif type == 'checking' && amount === Number
      @checking += amount
    else
      print "Please enter a valid account type"
    return self
  end

  def withdraw(amount, acct_type)
    if type == 'saving' && amount === Number
      @saving -= amount
      puts "Insufficient funds" unless @saving >= 0
    elsif type == 'checking' && amount === Number
      @checking -= amount
      print "Insufficient funds" unless @saving >= 0
    else
      print "Please enter a valid account type"
    return self
  end

  def display_balance acct_type
    if acct_type == 'saving'
      print "Account balance is $#{@saving}"
    elsif acct_type == 'checking'
      print "Account balance is $#{@checking}"
    else
      print "Please enter a valid account type"
  end

  def account_information
    print "Account number is #{@account_number}checking balance is
    #{@checking}, saving balance is #{@saving}, total balance is
    #{@checking + @saving}, interest rate is #{@interest_rate}."
  end

  def self.number_of_accounts
    @@bank_accounts
  end

  private
    def acctNumber
      Array.new(10).map { rand(1...9) }.join
  end
end
puts customer1 = BankAccount.new