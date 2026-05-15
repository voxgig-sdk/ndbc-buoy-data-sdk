package core

type NdbcBuoyDataError struct {
	IsNdbcBuoyDataError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNdbcBuoyDataError(code string, msg string, ctx *Context) *NdbcBuoyDataError {
	return &NdbcBuoyDataError{
		IsNdbcBuoyDataError: true,
		Sdk:              "NdbcBuoyData",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NdbcBuoyDataError) Error() string {
	return e.Msg
}
