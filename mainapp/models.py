from django.db import models

# Create your models here.

class Currencies(models.Model):
    class Meta():
        db_table = 'currencies'
    code_currency = models.DecimalField(max_digits=3, decimal_places=0)
    currency_int = models.CharField(max_length=3)
    currency_loc = models.CharField(max_length=55)

class Banks(models.Model):
    class Meta():
        db_table = 'banks'
    code_bank = models.DecimalField(max_digits=6, decimal_places=0)
    bank_name = models.CharField(max_length=255)

class Clients(models.Model):
    class Meta():
        db_table = 'clients'
    title = models.CharField(max_length=255)
    ident_num = models.CharField(max_length=10)


class Accounts(models.Model):
    class Meta():
        db_table = 'accounts'
    number = models.CharField(max_length=14)
    id_bank = models.ForeignKey(Banks)
    id_currency = models.ForeignKey(Currencies)
    id_client = models.ForeignKey(Clients)
    locked_out = models.BooleanField()

class Users(models.Model):
    class Meta():
        db_table = 'users'
    name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    doc_name = models.CharField(max_length=255)
    doc_id_number = models.CharField(max_length=255)

class Balances(models.Model):
    class Meta():
        db_table = 'balances'
    id_account = models.ForeignKey(Accounts)
    dt = models.DateTimeField()
    balance = models.DecimalField(max_digits=16, decimal_places=0)

class Users_Accounts(models.Model):
    class Meta():
        db_table = 'users_accounts'
    id_user = models.ForeignKey(Users)
    id_account = models.ForeignKey(Accounts)
    access_mode = models.BooleanField()


class Documents(models.Model):
    class Meta():
        db_table = 'documents'
    docnum = models.CharField(max_length=10)
    dt = models.DateTimeField()
    dt_bank = models.DateTimeField()
    id_account_a = models.ForeignKey(Accounts, related_name='account_a')
    id_account_b = models.ForeignKey(Accounts, related_name='account_b')
    kind = models.DecimalField(max_digits=2, decimal_places=0, null=True)
    purpose = models.TextField()
    amount = models.DecimalField(max_digits=16, decimal_places=0, null=True)
    amount_nv = models.DecimalField(max_digits=16, decimal_places=0, null=True)
    debit_credit = models.BooleanField()


