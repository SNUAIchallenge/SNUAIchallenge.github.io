# _plugins/rubypatch.rb
if RUBY_VERSION >= '3.2'
  class Object
    def tainted?
      false
    end

    def untaint
      self
    end
  end
end